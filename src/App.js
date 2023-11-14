import logo from './icon.png';
import './App.css';
import styles from './App.module.css'; // Import the CSS module
import { motion, AnimatePresence } from 'framer-motion';

import { Button, Card, Input, Layout, List, message } from "antd";
import { useState } from "react";
import { getContractNFTs} from "./utils";
import NftCard from './components/NftCard';
import ContractTrades from './components/ContractTrades';


const { Header, Content, Footer} = Layout;

function App() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearch = async () => {
    if (searchText === "") {
      return;
    }

    setLoading(true);

    try {
      const data = await getContractNFTs(searchText);
      setNfts(data.result);
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // // Define the initial and animate properties for the animation
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       delay: 0.3,
  //       duration: 0.5
  //     }
  //   }
  // };

  return (
    
    <Layout className={styles.App} style={{ height: "100vh" }}>

      <Header className={styles.header}>

        <img src={logo} alt="Logo" className={styles.logo} />

        <div className="gradient-text">

          Visualize the NFTs' Trade
        </div>
      </Header >
      <Content
        className={styles.content}
      >
        <Input.Group compact>
          <Input
            style={{width: 500}}
            className={styles.inputWidth}
            placeholder='Enter a NFT contract address to search'
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
          />
          <Button type='primary' className={styles.primaryButton} onClick={handleSearch}>search</Button>
          <ContractTrades tokenAddress = {searchText}/>
        </Input.Group>
        <AnimatePresence>
        <List
          loading={loading}

          style={{
            marginTop: 20,
            height: "calc(100% - 52px)",
            overflow: "auto",
          }}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={nfts}
          renderItem={(nft) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Set initial opacity and y position
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }} // Animate opacity and y position
              exit={{ opacity: 0, y: -20 }} // Exit animation
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className={styles.nftCard}
              key={nft.id} // Add a unique key to each card
            >
              <NftCard nft={nft} />
            </motion.div>
            //  each card fade in when it's first displayed. Remember to adjust these values and properties to match the feel of your application and to keep consistency with your design language.

          )}
        />
        </AnimatePresence>

      </Content>
      <Footer className={styles.footer}>
        Contact me for more information:
        <a href="mailto:ningchenliang98@gmail.com" className={styles.contactLink}>
          Abigail Liang
        </a>
      </Footer>
    </Layout>
   
  );
}

export default App;
