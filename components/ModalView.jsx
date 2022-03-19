import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { FormBuilder } from "react-native-paper-form-builder";
import { useForm } from "react-hook-form";
import { Button } from "react-native-paper";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#0077B6",
  },
};

export default function ModelView(props) {
  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      body: "",
      rating: "",
    },
    mode: "onSubmit",
  });

  return (
    <PaperProvider theme={theme}>
      <View style={styles.containerStyle}>
        <ScrollView contentContainerStyle={styles.scrollViewStyle}>
          <Text style={styles.headingStyle}>Add a review to your game</Text>
          <FormBuilder
            control={control}
            setFocus={setFocus}
            style={styles.form}
            formConfigArray={[
              {
                type: "text",
                name: "title",
                rules: {
                  required: true,
                  message: "Title is required",
                },
                textInputProps: {
                  label: "Title",
                },
              },
              {
                type: "text",
                name: "body",
                rules: {
                  required: true,
                  message: "Body is required",
                },
                textInputProps: {
                  label: "Body",
                },
              },
              {
                name: "rating",
                type: "select",
                rules: {
                  required: true,
                  message: "Rating is required",
                },
                textInputProps: {
                  label: "Rating",
                },
                options: [
                  {
                    value: 1,
                    label: "1",
                  },
                  {
                    value: 2,
                    label: "2",
                  },
                  {
                    value: 3,
                    label: "3",
                  },
                  {
                    value: 4,
                    label: "4",
                  },
                  {
                    value: 5,
                    label: "5",
                  },
                ],
              },
            ]}
          />
          <Button
            mode={"contained"}
            onPress={handleSubmit((data) => {
              console.log("form data", data);
              props.addReview(data);
            })}>
            Submit
          </Button>
        </ScrollView>
      </View>
      <Button mode={"contained"} onPress={props.modalFunction}>
        Go Back
      </Button>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: "#171b20",
    color: "white",
  },
  scrollViewStyle: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },
  headingStyle: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 40,
    color: "white",
  },
  form: {
    color: "red",
  },
});
