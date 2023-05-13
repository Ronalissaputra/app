import {View, Text} from 'react-native';

const TitleComp = props => {
  return (
    <>
      <Text className="text-xl text-slate-700">{props.children}</Text>
    </>
  );
};

export default TitleComp;
