import React from "react";
import "animate.css";
import { Button, Card, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <div className=" animate__animated animate__backInDown h-[90vh] flex items-center justify-center">
      <Card
        shadow="sm"
        padding="lg"
        className=" h-[200px] flex flex-col items-center justify-center"
        radius="md"
        withBorder
      >
        <Text fw={500}>Thanks For Your Purchasing</Text>
        <Link to={"/"}>
          <Button className=" bg-blue-500 " mt="md" radius="md">
            Go Home
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default CheckOut;
