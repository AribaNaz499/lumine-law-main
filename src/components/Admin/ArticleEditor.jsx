import React, { useState, useRef } from 'react';
import { 
  Box, Input, Button, Text, Container, VStack, 
  Stack, Heading, Flex
} from '@chakra-ui/react';
import ReactQuill, { Quill } from 'react-quill'; // Quill ko bhi import kiya
import 'react-quill/dist/quill.snow.css';
import { supabase } from '../../config/supabaseClient';
import { FiUploadCloud } from 'react-icons/fi';

// Quill ke toolbar options define karein
const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'font': [] }],
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
    [{ 'align': [] }],
    ['link', 'image', 'video'],
    ['clean']                                         // remove formatting button
  ],
};

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video', 'color', 'background', 'align'
];

const ArticleEditor = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  
  const fileInputRef = useRef(null);

  const generateSlug = (text) => {
    return text.toLowerCase().trim()
      .replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setSlug(generateSlug(newTitle));
  };

  const handleImageUpload = async (event) => {
    try {
      setUploading(true);
      const file = event.target.files[0];
      if (!file) return;
      const fileName = `${Date.now()}-${file.name}`;
      const { error: uploadError } = await supabase.storage.from('article-images').upload(fileName, file);
      if (uploadError) throw uploadError;
      const { data } = supabase.storage.from('article-images').getPublicUrl(fileName);
      setImageUrl(data.publicUrl);
      setMessage({ text: 'Image uploaded!', type: 'success' });
    } catch (error) {
      setMessage({ text: 'Upload failed: ' + error.message, type: 'error' });
    } finally { setUploading(false); }
  };

  const handlePublish = async () => {
    if (!title || !content || !imageUrl || !category) {
      setMessage({ text: 'Please fill all fields!', type: 'error' });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from('articles').insert([{ 
      title, 
      slug, 
      category,
      content, 
      image_url: imageUrl, 
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), 
      published: true 
    }]);

    if (error) setMessage({ text: 'Error: ' + error.message, type: 'error' });
    else {
      setMessage({ text: '✅ Published Successfully!', type: 'success' });
      setTitle(''); setSlug(''); setContent(''); setImageUrl(''); setCategory('');
    }
    setLoading(false);
  };

  return (
    <Box bg="#f8fafc" minH="100vh" py={12} color="black">
      <Container maxW="4xl">
        <Flex justify="space-between" align="center" mb={8}>
          <Box>
            <Heading size="xl" color="gray.800">Create New Post</Heading>
            <Text color="gray.500">Professional Rich Text Editor</Text>
          </Box>
          <Button 
            bg="blue.600" color="white" _hover={{ bg: "blue.700" }}
            size="lg" onClick={handlePublish} isLoading={loading}
          >
            Publish Post
          </Button>
        </Flex>

        <Stack spacing={6}>
          {message.text && (
            <Box p={4} borderRadius="lg" bg={message.type === 'success' ? 'green.100' : 'red.100'} color="black">
              {message.text}
            </Box>
          )}

          <Box bg="white" p={8} borderRadius="2xl" boxShadow="md" border="1px solid #e2e8f0">
            <VStack spacing={6} align="stretch">
              
              <Box>
                <Text fontWeight="bold" mb={2} color="gray.700">Post Title</Text>
                <Input 
                  placeholder="Enter title..." value={title} onChange={handleTitleChange} 
                  bg="white" color="black" borderColor="gray.300"
                />
              </Box>

              <Box>
                <Text fontWeight="bold" mb={2} color="gray.700">Select Category</Text>
                <select 
                  style={{ 
                    width: '100%', padding: '10px', borderRadius: '6px', 
                    border: '1px solid #cbd5e0', background: 'white', color: 'black' 
                  }}
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Choose Category</option>
                  <option value="immigration">Immigration News</option>
                  <option value="litigation">Litigation News</option>
                  <option value="conveyancing">Conveyancing News</option> 
                </select>
              </Box>

              <Box>
                <Text fontWeight="bold" mb={2} color="gray.700">Cover Image</Text>
                <Box 
                  border="2px dashed #cbd5e0" p={imageUrl ? 4 : 10} rounded="2xl" textAlign="center" 
                  bg="gray.50" onClick={() => fileInputRef.current.click()} cursor="pointer"
                >
                  <input type="file" hidden ref={fileInputRef} onChange={handleImageUpload} />
                  {imageUrl ? <img src={imageUrl} alt="preview" style={{ maxHeight: '150px', margin: '0 auto', borderRadius: '8px' }} /> : <FiUploadCloud size="40px" style={{ margin: '0 auto' }} />}
                  <Text mt={2} color="gray.600">{uploading ? "Uploading..." : "Click to upload image"}</Text>
                </Box>
              </Box>

              <Box>
                <Text fontWeight="bold" mb={3} color="gray.700">Content Editor</Text>
                <style>
                  {`
                    .quill-wrapper .ql-editor { 
                      color: black !important; 
                      background-color: white !important; 
                      min-height: 400px; 
                      font-size: 16px;
                      line-height: 1.6; /* Default Line Height */
                    }
                    /* Line height editor controls are limited in Quill, 
                       so we set a good default here */
                    .quill-wrapper .ql-editor p { margin-bottom: 15px; }
                    .quill-wrapper .ql-container { border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; }
                    .quill-wrapper .ql-toolbar { 
                      background-color: #f1f5f9 !important; 
                      border-top-left-radius: 12px; 
                      border-top-right-radius: 12px; 
                    }
                  `}
                </style>
                <Box className="quill-wrapper" shadow="sm">
                  <ReactQuill 
                    theme="snow" 
                    value={content} 
                    onChange={setContent} 
                    modules={modules}
                    formats={formats}
                  />
                </Box>
              </Box>

            </VStack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ArticleEditor;