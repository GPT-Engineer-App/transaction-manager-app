import { Box, Button, Container, Flex, Heading, IconButton, Input, Table, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { FaEdit, FaPlus, FaTrashAlt } from "react-icons/fa";

const Header = () => (
  <Flex bg="blue.500" p={4} color="white" justifyContent="space-between" alignItems="center">
    <Heading as="h1" size="lg">
      TransactManager
    </Heading>
    <Flex>
      <Button as="a" href="#dashboard" mr={2}>
        Dashboard
      </Button>
      <Button as="a" href="#transactions" mr={2}>
        Transactions
      </Button>
      <IconButton aria-label="Add new transaction" icon={<FaPlus />} />
    </Flex>
  </Flex>
);

const SummaryPanel = () => (
  <Box bg="white" p={4} shadow="md" border="1px" borderColor="gray.200">
    <Heading as="h2" size="md" mb={4}>
      Summary
    </Heading>
    <Text>Total Transactions: 120</Text>
    <Text>Transactions this Month: 30</Text>
    <Text>Total Value: $15,000</Text>
  </Box>
);

const TransactionList = () => (
  <VStack align="stretch" spacing={4}>
    <Box bg="gray.100" p={4}>
      <Text fontWeight="bold">Transaction #1</Text>
      <Text>Date: 2023-09-15</Text>
      <Text>Amount: $500</Text>
    </Box>
    <Box bg="gray.50" p={4}>
      <Text fontWeight="bold">Transaction #2</Text>
      <Text>Date: 2023-09-14</Text>
      <Text>Amount: $300</Text>
    </Box>
  </VStack>
);

const FilterBar = () => (
  <Flex gap={2} p={4} bg="gray.50">
    <Input placeholder="Filter by date..." />
    <Input placeholder="Filter by amount..." />
    <Button colorScheme="blue">Apply Filters</Button>
  </Flex>
);

const TransactionTable = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Date</Th>
        <Th>Amount</Th>
        <Th>Actions</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>1</Td>
        <Td>2023-09-15</Td>
        <Td>$500</Td>
        <Td>
          <IconButton aria-label="Edit" icon={<FaEdit />} mr={2} />
          <IconButton aria-label="Delete" icon={<FaTrashAlt />} />
        </Td>
      </Tr>
      <Tr>
        <Td>2</Td>
        <Td>2023-09-14</Td>
        <Td>$300</Td>
        <Td>
          <IconButton aria-label="Edit" icon={<FaEdit />} mr={2} />
          <IconButton aria-label="Delete" icon={<FaTrashAlt />} />
        </Td>
      </Tr>
    </Tbody>
  </Table>
);

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Header />
      <VStack spacing={8} my={8}>
        <SummaryPanel />
        <TransactionList />
        <FilterBar />
        <TransactionTable />
      </VStack>
    </Container>
  );
};

export default Index;
