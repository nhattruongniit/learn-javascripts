const sessionCampaigns = [
  {
    campaignId: "google-195b4eee-b0ee-4475-a70e-6bb8dbafd748",
    campaignName: "ad group 1",
  },
];

const dataSet = [
  {
    campaignId: "google-32231",
    campaignName: "ad group 2",
  },
  {
    campaignId: "google-195b4eee-b0ee-4475-a70e-6bb8dbafd748",
    campaignName: "ad group 1",
  },
];

// get campaign not duplicate in oldCampaigns and newCampaigns
const resCampaigns = [...dataSet, ...sessionCampaigns].filter(
  (campaign, index, self) =>
    index ===
    self.findIndex((_self) => _self.campaignId === campaign.campaignId)
);

console.log("res : ", resCampaigns);
