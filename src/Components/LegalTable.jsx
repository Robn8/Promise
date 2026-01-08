import EquipmentTemplate from "./EquipmentTemplate";

function LegalTable() {
  return (
    <EquipmentTemplate
      heroTitle="Legal Resources"
      heroSubtitle="Explore trusted legal help for caregivers and families"
      chartSrc="/legalTable.png"  // replace with your actual chart filename
      chartAlt="Legal Resources Chart"
      description="This chart highlights legal resources that specialize in elder law, patient advocacy, 
        and caregiver rights. From estate planning to navigating healthcare decisions, these organizations 
        provide families with the knowledge and support to make informed legal choices during the caregiving journey."
    />
  );
}

export default LegalTable;
