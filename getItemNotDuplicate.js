const oldCampaigns = [
  {
    campaignId: "google-195b4eee-b0ee-4475-a70e-6bb8dbafd748",
    campaignName: "ad group 1",
  },
];

const newCampaigns = [
  {
    campaignId: "google-195b4eee-b0ee-4475-a70e-6bb8dbafd748",
    campaignName: "ad group 1",
  },
  {
    campaignId: "google-32231",
    campaignName: "ad group 2",
  },
];

// get campaign not duplicate in oldCampaigns and newCampaigns
const resCampaigns = newCampaigns.filter(
  (newCampaign) =>
    !oldCampaigns.find(
      (oldCampaign) => oldCampaign.campaignId === newCampaign.campaignId
    )
);

console.log("google : ", { oldCampaigns, newCampaigns, resCampaigns });
