
const origin = "https://deep-index.moralis.io";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImM5ODA5OTU0LTU5M2UtNGI5OS1hZmQ5LTgwZWQwYmM5M2Y5NyIsIm9yZ0lkIjoiMzYzNDY3IiwidXNlcklkIjoiMzczNTQ5IiwidHlwZUlkIjoiZTNiMjFkYTctYWVkYy00OTFlLTgwNGItNTljOTNkZDlmMzNhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTkyMjQzNDIsImV4cCI6NDg1NDk4NDM0Mn0.n4lU9532rNIXMIbNgfetPf-Va-Q5UETEdNdmVJZQJKw";
export const getContractNFTs = async (tokenAddress) => {
    const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
    url.searchParams.append("chain", "eth");
    url.searchParams.append("format", "decimal");
    url.searchParams.append("limit", "20");
  
  
    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        "X-API-KEY": apiKey,
      },
    });
    return response.json();
  };
  
  
  export const getContractTrades = async (tokenAddress) => {
    const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
    url.searchParams.append("chain", "eth");
    url.searchParams.append("marketplace", "opensea");
    url.searchParams.append("limit", "20");
  
  
    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        "X-API-KEY": apiKey,
      },
    });
    return response.json();
  };
  
  
  export const getNFTTransfers = async (tokenAddress, tokenId) => {
    const url = new URL(
      `${origin}/api/v2/nft/${tokenAddress}/${tokenId}/transfers`
    );
    url.searchParams.append("chain", "eth");
    url.searchParams.append("format", "decimal");
    url.searchParams.append("limit", "20");
  
  
    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        "X-API-KEY": apiKey,
      },
    });
    return response.json();
  };
  