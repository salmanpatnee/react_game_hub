import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onSelectSortOrder: (order: string) => void;
    selectedSortOrder?: string | null;
}
const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    {
      value: "",
      label: "Relevance",
    },
    {
      value: "-added",
      label: "Data Added",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-released",
      label: "Release Date",
    },
    {
      value: "-metacritic",
      label: "Popularity",
    },
    {
      value: "-rating",
      label: "Average Rating",
    },
  ];
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" as={"button"} size="sm">
          Order By {selectedSortOrder ? sortOrders.find(order => order.value === selectedSortOrder)?.label : "Relevance"}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item key={order.value} value={order.value} onClick={() => onSelectSortOrder(order.value)}>
                {order.label}
              </Menu.Item>
            ))}   
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
