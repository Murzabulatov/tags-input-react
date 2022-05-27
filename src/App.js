import Layout from "./components/hoc/Layout/Layout";
import TagsInput from "./components/TagsInput/TagsInput";
import Info from "./components/Info/Info";
import React from "react";

export default App;

function App() {
  return (
      <Layout>
          <h1 style={{
              color: '#fff',
              textAlign: 'center',
              margin: 0
          }}>Tags input React</h1>
          <TagsInput />
          <Info />
      </Layout>
);
}
