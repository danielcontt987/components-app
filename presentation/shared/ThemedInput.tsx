import { TextInput, TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  className?: string;
  placeHolder: string;
}

const ThemedInput = ({placeHolder, ...rest }: Props) => {
  return (
    <TextInput
      placeholder={placeHolder}
      autoCapitalize="words"
      autoCorrect={false}
      className="py-4 px-2 text-black dark:text-white"
      {...rest}
    />
  );
};

export default ThemedInput;