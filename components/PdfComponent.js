import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { Text as ChakraText } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useSWR from "swr";

// Create styles
const BORDER_COLOR = "#4A5568";
const BORDER_STYLE = "solid";
const BORDER_WIDTH = 2;
const COL1_WIDTH = 12;
const COLN_WIDTH = (100 - COL1_WIDTH) / 2;
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    padding: 10,
  },
  imageClass: {
    width: "60%",
    alignSelf: "center",
    margin: 10,
  },
  section: {
    margin: 5,
  },
  table: {
    margin: 20,
    display: "table",
    width: "auto",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: BORDER_WIDTH,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol1Header: {
    width: COL1_WIDTH + "%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: BORDER_WIDTH,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColHeader: {
    width: COLN_WIDTH + "%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: BORDER_WIDTH,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol1: {
    width: COL1_WIDTH + "%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: BORDER_WIDTH,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol: {
    width: COLN_WIDTH + "%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: BORDER_WIDTH,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellHeader: {
    margin: 5,
    padding: 5,
    fontSize: 18,
    fontWeight: 500,
  },
  tableCell: {
    margin: 5,
    fontSize: 11,
  },

  info: {
    fontSize: 15,
    marginHorizontal: 20,
    marginVertical: 4,
  },
});

// Create Document Component
const MyDocument = ({ userData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image
          style={styles.imageClass}
          src="./social-media-cover.png"
        />
        <Text style={styles.info}>Goal: {userData.goal}</Text>
        <Text style={styles.info}>
          Start Date: {new Date(userData.createdAt).toLocaleString()}
        </Text>

        {/* Table View */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol1Header}>
              <Text style={styles.tableCellHeader}>Day</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Task</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Description</Text>
            </View>
          </View>
          {userData.days &&
            userData.days.map((user) => {
              const DAY = Object.keys(user)[0];
              const TASK_TODAY = user[DAY.toString()].taskToday;
              const DETAILS = user[DAY.toString()].details;
              const COMPLETED = user[DAY.toString()].details;

              if (COMPLETED) {
                return (
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol1}>
                      <Text style={styles.tableCell}>{DAY}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {TASK_TODAY}
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{DETAILS}</Text>
                    </View>
                  </View>
                );
              }
            })}
        </View>
      </Page>
    </Document>
  );
};

export default function PDFApp() {
  const [isClient, setIsClient] = useState(false);

  const { data } = useSWR("/api/getUser");

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <PDFDownloadLink
          document={<MyDocument userData={data && data.user} />}
          fileName="100-Days-Dare.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              <TextComponent text="Loading document" />
            ) : (
              <TextComponent text="Export As PDF" />
            )
          }
        </PDFDownloadLink>
      )}
    </>
  );
}

function TextComponent({ text }) {
  return (
    <ChakraText
      fontFamily="bungee"
      fontWeight="light"
      color="#5a06ff"
    >
      {text}
    </ChakraText>
  );
}
