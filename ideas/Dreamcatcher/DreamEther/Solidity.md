## Issues
Transfers of tokens with some balance in them must not allow rug pulls, so transfers and withdraws cannot occur within DISPUTE_WINDOW time of each other.  

Emit events when funds are locked using:
// ERC-5192 (recommended for gas efficiency) 
event Locked(uint256 tokenId); 
event Unlocked(uint256 tokenId);

