import React from "react";
import { TopicsTitle } from "../../enums/listTopics";
import { Topic } from "../../services/topics";
import Anxiety from "../../assets/illustrations/anxiety.svg";
import Growth from "../../assets/illustrations/growth.svg";
import Happiness from "../../assets/illustrations/happiness.svg";
import Meditation from "../../assets/illustrations/meditation.svg";
import Performance from "../../assets/illustrations/perfo.svg";
import Relax from "../../assets/illustrations/relaxation.svg";
import Sleep from "../../assets/illustrations/sleep.svg";
import Stress from "../../assets/illustrations/stress.svg";
import { View } from "react-native";
import ColoredCard from "../atoms/ColoredCard";

const DefaultTopicsList: Topic[] = [
  {
    id: 1,
    label: TopicsTitle.Anxiety,
    color: "#3F414E",
    backgroundColor: "#FFCF86",
    illustration: <Anxiety />,
  },
  {
    id: 2,
    label: TopicsTitle.Happiness,
    color: "#3F414E",
    backgroundColor: "#FEB18F",
    illustration: <Happiness />,
  },
  {
    id: 3,
    label: TopicsTitle.Meditation,
    color: "#FFECCC",
    backgroundColor: "#AFDBC5",
    illustration: <Meditation />,
  },
  {
    id: 4,
    label: TopicsTitle.Performances,
    color: "#FEF9F3",
    backgroundColor: "#FA6E5A",
    illustration: <Performance />,
  },
  {
    id: 5,
    label: TopicsTitle.PersonalGrowth,
    color: "#FFECCC",
    backgroundColor: "#6CB28E",
    illustration: <Growth />,
  },
  {
    id: 6,
    label: TopicsTitle.Relaxation,
    color: "#3F414E",
    backgroundColor: "#FEDEA5",
    illustration: <Relax />,
  },
  {
    id: 7,
    label: TopicsTitle.Sleep,
    color: "#EBEAEC",
    backgroundColor: "#3F414E",
    illustration: <Sleep />,
  },
  {
    id: 8,
    label: TopicsTitle.Stress,
    color: "#FFECCC",
    backgroundColor: "#9BA3FF",
    illustration: <Stress />,
  },
];

const TopicsList = () => {
  return (
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "flex-start",flexWrap: "wrap" }}>
      {DefaultTopicsList.map((topic, idx) => (
        <ColoredCard
          key={idx}
          color={topic.color}
          backgroundColor={topic.backgroundColor} 
          label={topic.label}
          illustration={topic.illustration}
          onPress={() => console.log(topic.label)}
        />
      ))}
    </View>
  );
};

export default TopicsList;
