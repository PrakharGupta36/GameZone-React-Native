import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,

    padding: 20,
    backgroundColor: "#171b20",
  },
  containerHome: {
    display: "flex",
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#171b20",
  },
  containerReview: {
    flex: 1,
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#171b20",
  },
  title: {
    color: "white",
    fontFamily: "Poppins_300Light",
    fontWeight: "bold",
    fontSize: 16,
  },
  text: {
    color: "white",
    fontFamily: "Poppins_300Light",
  },
  textReview: {
    color: "black",
    fontFamily: "Poppins_300Light",
    marginTop: 15,
  },
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    letterSpacing: 1,
    fontFamily: "Poppins_300Light",
  },
  icon: {
    position: "absolute",
    left: 16,
  },
  textAbout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textAboutInner: {
    color: "white",
    fontFamily: "Poppins_300Light",
    fontSize: 20,
  },
  card: {
    margin: 10,
    flex: 1,
  },
  cardInner: {
    marginTop: 30,
  },
  list: {
    display: "flex",
    flex: 3,
  },
  modal: {
    flex: 1,
  },
  button: {
    flex: 1,
    position: "absolute",
    backgroundColor: "#0077B6",
    borderRadius: 50,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
    left: 270,
    top: 580,
    padding: 10,
    elevation: 3,
  },
});

{
  /* <Button mode={"contained"} onPress={props.modalFunction}>
            Submit
          </Button> */
}
