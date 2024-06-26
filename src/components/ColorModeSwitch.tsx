import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <HStack>
        <Switch
          name="colorModeSwitch"
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <Text whiteSpace={"nowrap"}>
          {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
        </Text>
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
