import { Card, Paragraph, Title } from "react-native-paper";
import * as React from "react";
import { FC } from "react";

export const ClassItem: FC<{
  onPress: () => void;
  title: string;
}> = ({onPress, title}) => {
  return <Card onPress={onPress}>
    <Card.Content>
      <Title>{title}</Title>
      <Paragraph>{`My ${title.toLocaleLowerCase()} classes details`}</Paragraph>
    </Card.Content>
  </Card>;
}
