function getSectionName(title) {
  const sections = {
    Section_1: "Organisation",
    Section_2: "Quality Assurance",
    Section_3: "Development",
    Section_4: "Integration",
    Section_5: "Activities",
    Section_6: "Institutional Support",
    Section_7: "External Environment",
  };

  return sections[title] || [];
}

export { getSectionName };
