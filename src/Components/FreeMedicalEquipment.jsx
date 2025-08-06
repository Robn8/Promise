import EquipmentTemplate from "./EquipmentTemplate";

function FreeMedicalEquipment() {
  return (
    <EquipmentTemplate
      heroTitle="Free Medical Equipment"
      heroSubtitle="Explore available free resources for medical equipment"
      chartSrc="/t1.png"
      chartAlt="Free Medical Equipment Chart"
      description="This chart provides an overview of available free medical equipment resources in our area.
        It highlights programs and donation centers that support caregivers and patients by providing essential 
        medical tools at no cost. These services help reduce the financial burden and ensure that everyone 
        has access to the equipment they need to provide proper care and improve quality of life."
    />
  );
}

export default FreeMedicalEquipment;