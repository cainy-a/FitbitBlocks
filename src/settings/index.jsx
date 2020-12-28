function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Avatar Colours</Text>}>
        <Text>Foreground Colour</Text>
        <ColorSelect
          settingsKey="foreground"
          colors={[
            {color: "#C2F1FF"},
            {color: "tomato"},
            {color: "sandybrown"},
            {color: "#FFD700"},
            {color: "#ADFF2F"},
            {color: "deepskyblue"},
            {color: "plum"}
          ]}
        />
        <Text>Background Colour</Text>
        <ColorSelect
          settingsKey="background"
          colors={[
            {color: "#6DB4D5"},
            {color: "tomato"},
            {color: "sandybrown"},
            {color: "#FFD700"},
            {color: "#ADFF2F"},
            {color: "deepskyblue"},
            {color: "plum"}
          ]}
        />
        <Text italic align="center">By Cain Atkinson</Text>
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
