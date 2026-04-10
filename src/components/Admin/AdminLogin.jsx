import React, { useState } from 'react';
import { Box, Container, VStack, Heading, Text, Input, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    
    const { error } = await signIn(email, password);
    
    if (error) {
      setErrorMsg(error.message || 'Wrong email or password');
    } else {
      navigate('/admin/articles/new');
    }
    setLoading(false);
  };

  return (
    <Box 
      minH="100vh" 
      bg="gray.50" 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
      overflow="hidden"
    >
      <Container maxW="md" py={0}>
        <Box bg="white" p={8} borderRadius="2xl" boxShadow="lg">
          <VStack spacing={6}>
            <Heading color="yellow.600">Admin Login</Heading>
            <Text color="gray.500">Sign in to write articles</Text>
            <Text fontSize="sm" fontWeight="600" color="red.500">
              ⚠️ You need to login every time
            </Text>

            {errorMsg && (
              <Box bg="red.100" color="red.700" p={3} borderRadius="md" width="100%" textAlign="center">
                {errorMsg}
              </Box>
            )}

            <form onSubmit={handleSubmit} style={{ width: '100%' }} autoComplete="off">
              <VStack spacing={4}>
                <Input
                  type="email"
                  placeholder="Email Address"
                  color="black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  size="lg"
                  autoComplete="off"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  color="black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  size="lg"
                  autoComplete="new-password"
                />
                <Button
                  type="submit"
                  bg="yellow.600"
                  color="white"
                  _hover={{ bg: 'yellow.500' }}
                  width="100%"
                  size="lg"
                  isLoading={loading}
                  mt={4}
                >
                  Sign In
                </Button>
              </VStack>
            </form>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default AdminLogin;