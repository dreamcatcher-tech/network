## Issues
Transfers of tokens with some balance in them must not allow rug pulls, so transfers and withdraws cannot occur within DISPUTE_WINDOW time of each other.  

Emit events when funds are locked using:
// ERC-5192 (recommended for gas efficiency) 
event Locked(uint256 tokenId); 
event Unlocked(uint256 tokenId);

Emit events for all metadata to show the uri is frozen
event PermanentURI(string _value, uint256 indexed _id);

Emit events to show metadata has changed for packets
`event URI(string _value, uint256 indexed _id);`

Return contract level uri data for opensea: https://docs.opensea.io/docs/contract-level-metadata
