import styles from "../../styles/navbar.module.css";
import { useEffect, useState } from "react";
import { HStack, Image, Text, Box, VStack } from "@chakra-ui/react";
import { Button } from "../../lib/chakra-components/ui/button";
import MenuIcon from "../../assets/navbar/menu-dropdown-icon.png";
import BlackMenuIcon from "../../assets/navbar/menu-dropdown-icon-black.png";
import "../../styles/fonts.css";
import { Link } from "react-router-dom";

const ServicesMegaMenu = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const Placeholder = () => {
    if (!mounted) {
      return (
        <Box position="relative" height="100%">
          <Button
            as={Link}
            to={"/all-services"}
            backgroundColor="inherit"
            color="white"
            size="sm"
            fontSize={{
              xs: "12px",
              md: "14px",
              lg: "14px",
              xl: "16px",
              "2xl": "18px",
            }}
            height="100%"
          >
            Services
          </Button>
        </Box>
      );
    } else
      return (
        <Box
          position="relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          height="100%"
        >
          <Button
            as={Link}
            to={"/all-services"}
            backgroundColor="inherit"
            color="white"
            size="sm"
            fontSize={{
              xs: "12px",
              md: "14px",
              lg: "14px",
              xl: "16px",
              "2xl": "18px",
            }}
            fontWeight={500}
            height="100%"
            borderRadius="0px"
            position="relative"
            px={{
              xs: "4px",
              md: "8px",
              lg: "12px",
              xl: "14px",
              "2xl": "16px",
            }}
            className={styles.servicesMegaMenuButton}
            data-state={isOpen ? "open" : ""}
            _hover={{
              color: "white",
              backgroundColor: "black",
              borderBottom: "5px solid #BEAB7C",
            }}
            css={{
              transition: "all 0.3s ease",
              borderBottom: isOpen ? "5px solid #BEAB7C" : "none",
            }}
          >
            Services
            <Image src={MenuIcon} width={"auto"} alt="Menu Icon" />
            <Image src={BlackMenuIcon} width={"auto"} alt="Black Menu Icon" />
          </Button>

          <Box
            position="fixed"
            top="50px"
            left="50"
            width="100vw"
            backgroundColor="black"
            py={"10px"}
            px={"10px"}
            zIndex={9999}
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
            className={`${styles.megaMenuContainer} ${isOpen ? styles.open : ""}`}
          >
            <VStack
              alignItems={"flex-start"}
              onClick={() => setIsOpen(false)}
              px={{ lg: "120px", xl: "160px", "2xl": "200px" }}
              width={"100%"}
            >

              {/* ── ROW 1 ── */}
              <HStack
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                width={"100%"}
                py={"10px"}
                gap={{ lg: "50px", xl: "60px" }}
                flexWrap={"nowrap"}
              >
                {/* Immigration */}
                <VStack
                  alignItems={"flex-start"}
                  gap={{ lg: "6px", xl: "8px", "2xl": "10px" }}
                  minWidth={{ lg: "130px", xl: "150px", "2xl": "170px" }}
                  maxWidth={{ lg: "150px", xl: "170px", "2xl": "190px" }}
                >
                  <Link to={"/all-services/immigration"} style={{ textDecoration: "none" }}>
                    <Text fontSize={{ lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={700} color={"#efdc6b"} textAlign={"left"} className={styles.menuHeader} _hover={{ borderBottom: "2px solid #beab7c" }}>
                      Immigration
                    </Text>
                  </Link>
                  <Text as={Link} to={"/all-services/immigration/asylum"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} color={"white"} textAlign={"left"} className={styles.menuText}>Asylum</Text>
                  <Text as={Link} to={"/all-services/immigration/skilled-worker-visa"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Skilled Worker Visa</Text>
                  <Text as={Link} to={"/all-services/immigration/spouse-visa"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Spouse Visa</Text>
                  <Text as={Link} to={"/all-services/immigration/uk-visitor-visa"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>UK Visitor Visa</Text>
                  <Link to={"/all-services/immigration"} style={{ textDecoration: "none" }}>
                    <Text fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={700} textAlign={"left"} className={styles.menuText}>Explore More</Text>
                  </Link>
                </VStack>

                {/* Residential Property */}
                <VStack
                  alignItems={"flex-start"}
                  gap={{ lg: "6px", xl: "8px", "2xl": "10px" }}
                  minWidth={{ lg: "150px", xl: "170px", "2xl": "190px" }}
                  maxWidth={{ lg: "180px", xl: "200px", "2xl": "220px" }}
                >
                  <Link to={"/all-services/residential"} style={{ textDecoration: "none" }}>
                    <Text fontSize={{ lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={700} color={"#efdc6b"} textAlign={"left"} className={styles.menuHeader} _hover={{ borderBottom: "2px solid #beab7c" }}>
                      Residential Property
                    </Text>
                  </Link>
                  <Text as={Link} to={"/all-services/residential/freehold-sales"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Freehold and Leasehold Sales</Text>
                  <Text as={Link} to={"/all-services/residential/freehold-purchases"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Freehold and Leasehold Purchases</Text>
                  <Text as={Link} to={"/all-services/residential/lease-terms-advice"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Lease Terms Advice</Text>
                  <Text as={Link} to={"/all-services/residential/transfer-of-equity"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Transfers of Equity</Text>
                </VStack>

                {/* Commercial Property */}
                <VStack
                  alignItems={"flex-start"}
                  gap={{ lg: "6px", xl: "8px", "2xl": "10px" }}
                  minWidth={{ lg: "160px", xl: "180px", "2xl": "200px" }}
                  maxWidth={{ lg: "200px", xl: "220px", "2xl": "240px" }}
                >
                  <Link to={"/all-services/commercial"} style={{ textDecoration: "none" }}>
                    <Text fontSize={{ lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={700} color={"#efdc6b"} textAlign={"left"} className={styles.menuHeader} _hover={{ borderBottom: "2px solid #beab7c" }}>
                      Commercial Property
                    </Text>
                  </Link>
                  <Text as={Link} to={"/all-services/commercial/lease-renewals"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Lease Renewals</Text>
                  <Text as={Link} to={"/all-services/commercial/business-licenses"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Purchase of Business and Licenses to Align</Text>
                  <Text as={Link} to={"/all-services/commercial/purchase-commercial"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Purchase of Commercial Property</Text>
                  <Text as={Link} to={"/all-services/commercial/sales-commercial"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Sales of Commercial Property</Text>
                  <Link to={"/all-services/commercial"} style={{ textDecoration: "none" }}>
                    <Text fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={700} textAlign={"left"} className={styles.menuText}>Explore More</Text>
                  </Link>
                </VStack>

                {/* Intellectual Property */}
                <VStack
                  alignItems={"flex-start"}
                  gap={{ lg: "6px", xl: "8px", "2xl": "10px" }}
                  minWidth={{ lg: "120px", xl: "140px", "2xl": "160px" }}
                  maxWidth={{ lg: "160px", xl: "180px", "2xl": "200px" }}
                >
                  <Link to={"/all-services/intellectual-property"} style={{ textDecoration: "none" }}>
                    <Text fontSize={{ lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={700} color={"#efdc6b"} textAlign={"left"} className={styles.menuHeader} _hover={{ borderBottom: "2px solid #beab7c" }}>
                      Intellectual Property
                    </Text>
                  </Link>
                  <Text as={Link} to={"/all-services/intellectual-property/copyright"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Copyright</Text>
                  <Text as={Link} to={"/all-services/intellectual-property/patent"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Patent</Text>
                  <Text as={Link} to={"/all-services/intellectual-property/trademark"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Trademark</Text>
                </VStack>

                {/* Dispute Resolution */}
                <VStack
                  alignItems={"flex-start"}
                  gap={{ lg: "6px", xl: "8px", "2xl": "10px" }}
                  minWidth={{ lg: "160px", xl: "180px", "2xl": "200px" }}
                  maxWidth={{ lg: "220px", xl: "240px", "2xl": "260px" }}
                >
                  <Link to={"/all-services/dispute-resolution"} style={{ textDecoration: "none" }}>
                    <Text fontSize={{ lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={700} color={"#efdc6b"} textAlign={"left"} className={styles.menuHeader} _hover={{ borderBottom: "2px solid #beab7c" }}>
                      Dispute Resolution and Civil Litigation Services
                    </Text>
                  </Link>
                  <Text as={Link} to={"/all-services/dispute-resolution/building-contracts"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Building Contracts</Text>
                  <Text as={Link} to={"/all-services/dispute-resolution/contract-disputes"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Contract Disputes</Text>
                  <Text as={Link} to={"/all-services/dispute-resolution/supply-goods-services"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Contracts for the Supply of Goods and Services</Text>
                  <Text as={Link} to={"/all-services/dispute-resolution/debt-matters"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Debt Matters</Text>
                  <Link to={"/all-services/dispute-resolution"} style={{ textDecoration: "none" }}>
                    <Text fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={700} textAlign={"left"} className={styles.menuText}>Explore More</Text>
                  </Link>
                </VStack>
              </HStack>

              {/* ── ROW 2 ── same gap and minWidth so columns align under Row 1 */}
              <HStack
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                width={"100%"}
                py={"10px"}
                gap={{ lg: "50px", xl: "60px" }}
                flexWrap={"nowrap"}
              >
                {/* Landlord — same minWidth as Immigration */}
                <VStack
                  alignItems={"flex-start"}
                  gap={{ lg: "6px", xl: "8px", "2xl": "10px" }}
                  minWidth={{ lg: "130px", xl: "150px", "2xl": "170px" }}
                  maxWidth={{ lg: "150px", xl: "170px", "2xl": "190px" }}
                >
                  <Link to={"/all-services/landlord-tenant"} style={{ textDecoration: "none" }}>
                    <Text fontSize={{ lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={700} color={"#efdc6b"} textAlign={"left"} className={styles.menuHeader} _hover={{ borderBottom: "2px solid #beab7c" }}>
                      Landlord and Tenant Disputes
                    </Text>
                  </Link>
                  <Text as={Link} to={"/all-services/landlord-tenant/claims-disrepair"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Claims for Disrepair</Text>
                  <Text as={Link} to={"/all-services/landlord-tenant/possession-claims"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Possession Claims</Text>
                  <Text as={Link} to={"/all-services/landlord-tenant/recovery-rent"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Recovery of Rent Arrears</Text>
                </VStack>

                {/* Family — same minWidth as Residential */}
                <VStack
                  alignItems={"flex-start"}
                  gap={{ lg: "6px", xl: "8px", "2xl": "10px" }}
                  minWidth={{ lg: "150px", xl: "170px", "2xl": "190px" }}
                  maxWidth={{ lg: "180px", xl: "200px", "2xl": "220px" }}
                >
                  <Link to={"/all-services/family-and-children"} style={{ textDecoration: "none" }}>
                    <Text fontSize={{ lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={700} color={"#efdc6b"} textAlign={"left"} className={styles.menuHeader} _hover={{ borderBottom: "2px solid #beab7c" }}>
                      Family and Children
                    </Text>
                  </Link>
                  <Text as={Link} to={"/all-services/family/divorce"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Divorce</Text>
                  <Text as={Link} to={"/all-services/family/domestic-violence"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Domestic Violence</Text>
                  <Text as={Link} to={"/all-services/family/parental-responsbility"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Parental Responsibility</Text>
                  <Text as={Link} to={"/all-services/family/nuptial-agreement"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Pre Nuptial Agreements</Text>
                  <Link to={"/all-services/family-and-children"} style={{ textDecoration: "none" }}>
                    <Text fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={700} textAlign={"left"} className={styles.menuText}>Explore More</Text>
                  </Link>
                </VStack>

                {/* Wills — same minWidth as Commercial */}
                <VStack
                  alignItems={"flex-start"}
                  gap={{ lg: "6px", xl: "8px", "2xl": "10px" }}
                  minWidth={{ lg: "160px", xl: "180px", "2xl": "200px" }}
                  maxWidth={{ lg: "200px", xl: "220px", "2xl": "240px" }}
                >
                  <Link to={"/all-services/wills-probate"} style={{ textDecoration: "none" }}>
                    <Text fontSize={{ lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={700} color={"#efdc6b"} textAlign={"left"} className={styles.menuHeader} _hover={{ borderBottom: "2px solid #beab7c" }}>
                      Wills and Probate
                    </Text>
                  </Link>
                  <Text as={Link} to={"/all-services/wills-probate/probate"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Probate</Text>
                  <Text as={Link} to={"/all-services/wills-probate/succession-planning"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Succession Planning</Text>
                  <Text as={Link} to={"/all-services/wills-probate/wills"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Wills</Text>
                  <Text as={Link} to={"/all-services/wills-probate/trusts"} fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={400} textAlign={"left"} className={styles.menuText}>Trusts</Text>
                  <Link to={"/all-services/wills-probate"} style={{ textDecoration: "none" }}>
                    <Text fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight={700} textAlign={"left"} className={styles.menuText}>Explore More</Text>
                  </Link>
                </VStack>
              </HStack>

            </VStack>
          </Box>
        </Box>
      );
  };

  return (
    <>
      <Placeholder />
    </>
  );
};

export default ServicesMegaMenu;