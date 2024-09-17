import { ActivityIndicator, Text, TouchableOpacity, ViewStyle, TextStyle } from "react-native";

// Define the props interface
interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  containerStyles?: string; // Optional, as it may not always be provided
  textStyles?: string; // Optional, as it may not always be provided
  isLoading?: boolean; // Optional, defaults to false if not provided
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerStyles = "",
  textStyles = "",
  isLoading = false,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
