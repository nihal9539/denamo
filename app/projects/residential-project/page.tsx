import HeaderWithTitle from "@/components/HeaderWithTitle";
import ProjectSection from "@/components/ProjectSection";

export default function ResidentialProject() {
  const projects = [
    {
      name: "Private Royal Palace",
      work: "Design & Built Projects",
      place: "Riyadh, KSA",
      details:
        "The Private Royal Palace in Riyadh, KSA, spans 115,000 square meters, blending traditional architecture with modern elegance. It features luxurious private suites, entertainment lounges, swimming pools, and serene landscaped gardens. Equipped with advanced electromechanical systems for efficiency and comprehensive security for privacy, the palace offers a perfect balance of comfort, luxury, and functionality, reflecting the highest standards of royal living.",
      images: [
        "/residential/privateroyalaplace/Picture1.png",
        "/residential/privateroyalaplace/Picture2.png",
        "/residential/privateroyalaplace/Picture3.png",
        "/residential/privateroyalaplace/Picture4.png",
        "/residential/privateroyalaplace/Picture5.png",
        "/residential/privateroyalaplace/Picture6.png",
        "/residential/privateroyalaplace/Picture7.png",
        "/residential/privateroyalaplace/Picture8.png",
      ],
    },
    {
      name: "Private Residence for Mr. Adel Abuljadayel",
      work: "Design & Built Projects ",
      place: "Jeddah, Saudi Arabia",
      details:
        "The Private Residence for Mr. Adel Abuljadayel, located in Jeddah, Saudi Arabia, is a meticulously designed project that reflects elegance and modern sophistication. Developed as part of a design and build initiative, the residence blends contemporary architecture with personalized features, ensuring both comfort and functionality. With carefully crafted interiors and thoughtfully landscaped outdoor spaces, the residence provides a luxurious living experience. The project exemplifies precision and innovation, tailored to meet the unique needs and lifestyle of Mr. Abuljadayel.",
      images: [
        "/residential/MrAdel/Picture3.png",
        "/residential/MrAdel/Picture1.png",
        "/residential/MrAdel/Picture2.png",
        "/residential/MrAdel/Picture4.png",
        "/residential/MrAdel/Picture5.png",
        "/residential/MrAdel/Picture6.png",
      ],
    },
    {
      name: "Private Residence",
      work: "Design & Built Projects ",
      place: "Saudi Arabia",
      details:
        "The Private Residence in Saudi Arabia is a luxurious design and build project, combining modern architecture with elegant interiors, a private pool, and scenic outdoor spaces. Tailored for comfort and functionality, it offers a seamless blend of style and practicality.",
      images: [
        "/residential/PrivateResidence/Picture3.png",
        "/residential/PrivateResidence/Picture1.png",
        "/residential/PrivateResidence/Picture2.png",
        "/residential/PrivateResidence/Picture4.png",
      ],
    },
    {
      name: "Mr. Khalid Bataweel Residential Buildings  ",
      work: "Design & Built Projects ",
      place: "Saudi Arabia",
      details:
        "Mr. Khalid Bataweel Residential Buildings in Saudi Arabia, designed and built by our company, exemplify contemporary residential architecture. This project features stylish residential buildings with spacious layouts and premium finishes, catering to luxury living. Each unit includes a generous balcony on the top floor, perfect for enjoying views and outdoor relaxation. The buildings also provide ample ground parking space for residents' convenience, making these residences an excellent choice for those seeking comfort and elegance in a desirable location.",
      images: [
        "/residential/MrKhalid/Picture3.png",
        "/residential/MrKhalid/Picture1.png",
        "/residential/MrKhalid/Picture2.png",
      ],
    },
    {
      name: "Apartment Complex for AL-ZAMEL GROUP",
      work: "Design & Built Projects ",
      place: "Jeddah, Saudi Arabia ",
      details:
        "Mr. Khalid Bataweel Residential Buildings in Saudi Arabia, designed and built by our company, exemplify contemporary residential architecture. This project features stylish residential buildings with spacious layouts and premium finishes, catering to luxury living. Each unit includes a generous balcony on the top floor, perfect for enjoying views and outdoor relaxation. The buildings also provide ample ground parking space for residents' convenience, making these residences an excellent choice for those seeking comfort and elegance in a desirable location.",
      images: [
        "/residential/MrKhalid/Picture3.png",
        "/residential/MrKhalid/Picture1.png",
        "/residential/MrKhalid/Picture2.png",
      ],
    },
    {
      name: "Private Residence",
      work: "Design & Built Projects ",
      place: "Saudi Arabia",
      details:
        "Featuring a collection of exquisite projects, each uniquely designed to reflect distinct styles and functionalities. From opulent residences with private pools to minimalist homes that emphasize open spaces, the work caters to a variety of preferences. Each project harmonizes innovative architecture with thoughtful details, ensuring both aesthetic appeal and practical living solutions. Whether it's a modern villa nestled in lush gardens or a sleek urban home with panoramic views, the designs celebrate diversity and luxury in every square meter.",
      images: [
        "/residential/PrivateResidenceTwo/Picture1.png",
        "/residential/PrivateResidenceTwo/Picture2.png",
        "/residential/PrivateResidenceTwo/Picture3.png",
        "/residential/PrivateResidenceTwo/Picture4.png",
        "/residential/PrivateResidenceTwo/Picture5.png",
      ],
    },
    {
      name: "Mr. Shahini Residential Palace",
      work: "Design & Built Projects ",
      place: "Saudi Arabia",
      details:
        "The Mr. Shahini Residential Palace in Saudi Arabia is a luxurious private residence that beautifully combines architectural and interior design. This project offers a complete design and construction service, ensuring an elegant and functional space tailored to the highest standards of comfort and style. Every detail reflects a commitment to excellence, making this palace a true embodiment of refined living.",
      images: [
        "/residential/MrShahini/Picture1.png",
        "/residential/MrShahini/Picture2.png",
        "/residential/MrShahini/Picture3.png",
        "/residential/MrShahini/Picture4.png",
        "/residential/MrShahini/Picture5.png",
        "/residential/MrShahini/Picture6.png",
        "/residential/MrShahini/Picture7.png",
        "/residential/MrShahini/Picture8.png",
        "/residential/MrShahini/Picture9.png",
        "/residential/MrShahini/Picture10.png",
        "/residential/MrShahini/Picture11.png",
        "/residential/MrShahini/Picture12.png",
        "/residential/MrShahini/Picture13.png",
      ],
    },
    {
      name: "Private Villa for Mr. Ghaith Aljohani ",
      work: "Design & Built Projects ",
      place: "Jeddah, Saudi Arabia",
      details:
        "The Private Villa for Mr. Ghaith Aljohani in Jeddah, Saudi Arabia, is a luxury residence that combines sophisticated design with exquisite finishes. This spacious villa features elegant living areas, beautifully landscaped gardens, and modern amenities, providing an oasis of comfort and tranquility tailored to the owner's refined tastes.",
      images: [
        "/residential/MrGhaith/Picture1.png",
        "/residential/MrGhaith/Picture2.png",
        "/residential/MrGhaith/Picture3.png",
        "/residential/MrGhaith/Picture4.png",
        "/residential/MrGhaith/Picture5.png",
      ],
    },
    {
      name: "Dr. Walid Asaad Residence ",
      work: "Design & Built Projects ",
      place: "Jeddah, Saudi Arabia",
      details:
        "The Dr. Walid Asaad Residence in Jeddah, Saudi Arabia, is a meticulously crafted luxury home. Blending modern architecture with refined interiors, the residence offers a perfect balance of style and functionality. Thoughtfully designed living spaces and serene outdoor areas create an environment of comfort and sophistication, tailored to meet the highest standards.",
      images: [
        "/residential/DrWalidAsaad/Picture1.png",
        "/residential/DrWalidAsaad/Picture2.png",
        "/residential/DrWalidAsaad/Picture3.png",
        "/residential/DrWalidAsaad/Picture4.png",
        "/residential/DrWalidAsaad/Picture5.png",
      ],
    },
    {
      name: "Mr. Waleed Balbaid Residence ",
      work: "Design & Built Projects ",
      place: "Jeddah, Saudi Arabia",
      details:
        "The Mr. Waleed Balbaid Residence in Jeddah, Saudi Arabia, is a luxurious home featuring modern architecture and elegant interiors. It includes a state-of-the-art kitchen and a private home theatre, offering both comfort and entertainment with a blend of style and functionality.",
      images: [
        "/residential/MrWaleedBalbaid/Picture1.png",
        "/residential/MrWaleedBalbaid/Picture2.png",
        "/residential/MrWaleedBalbaid/Picture3.png",
        "/residential/MrWaleedBalbaid/Picture4.png",
        "/residential/MrWaleedBalbaid/Picture5.png",
        "/residential/MrWaleedBalbaid/Picture6.png",
        "/residential/MrWaleedBalbaid/Picture7.png",
        "/residential/MrWaleedBalbaid/Picture8.png",
      ],
    },
    {
      name: "Private Villa for Mr. Ali A. Batterjee",
      work: "Design & Built Projects ",
      place: "Jeddah, Saudi Arabia",
      details:
        "The Private Villa for Mr. Ali A. Batterjee in Jeddah, Saudi Arabia, is a luxury residence that blends modern design with functionality. Featuring a private pool and modest garden, the villa offers elegant interiors, ensuring a comfortable and refined living experience.",
      images: [
        "/residential/MrAli/Picture1.png",
        "/residential/MrAli/Picture2.png",
        "/residential/MrAli/Picture3.png",
        "/residential/MrAli/Picture4.png",
      ],
    },
    {
      name: "Private Residential complex for Mr. Abdulmajeed Batterjee",
      work: "Design & Built Projects ",
      place: "Jeddah, Saudi Arabia",
      details:
        "The Private Residential Complex for Mr. Abdulmajeed Batterjee in Jeddah, Saudi Arabia, is a premium development designed for luxurious family living. It features a private pool, spacious balconies, and a dedicated children's play area, creating a perfect blend of comfort, leisure, and functionality.",
      images: [
        "/residential/MrAbdulmajeed/Picture1.png",
        "/residential/MrAbdulmajeed/Picture2.png",
        "/residential/MrAbdulmajeed/Picture3.png",
        "/residential/MrAbdulmajeed/Picture4.png",
        "/residential/MrAbdulmajeed/Picture5.png",
      ],
    },
    {
      name: "Private Residences ",
      work: "Design & Built Projects ",
      place: "Saudi Arabia",
      details:
        "The Private Residences in Saudi Arabia showcase a collection of diverse luxury projects, each designed with unique architectural styles and modern amenities. From elegant villas with private pools and balconies to family-friendly homes with children's play areas, these residences reflect personalized craftsmanship. Every project integrates high-end interior design, ensuring both comfort and sophistication, tailored to the distinct preferences of their owners.",
      images: [
        "/residential/PrivateResidenceThree/Picture1.png",
        "/residential/PrivateResidenceThree/Picture2.png",
        "/residential/PrivateResidenceThree/Picture3.png",
        "/residential/PrivateResidenceThree/Picture4.png",
        "/residential/PrivateResidenceThree/Picture5.png",
        "/residential/PrivateResidenceThree/Picture6.png",
      ],
    },
    {
      name: "Knowledge Economic City project with Al-Dar Al-Arabia",
      work: "Design & Built Projects ",
      place: "Madinah, Saudi Arabia",
      details:
        "The Knowledge Economic City Project in collaboration with Al-Dar Al-Arabia is a thoughtfully designed residential compound in Saudi Arabia. This project offers modern living spaces with a focus on community and sustainability, blending convenience with comfort. It caters to residents with well-planned homes, green spaces, and essential amenities, fostering a vibrant and connected lifestyle.",
      images: [
        "/residential/KnowledgeEconomic/Picture2.png",
        "/residential/KnowledgeEconomic/Picture1.png",
        "/residential/KnowledgeEconomic/Picture3.png",
        "/residential/KnowledgeEconomic/Picture4.png",
        "/residential/KnowledgeEconomic/Picture5.png",
      ],
    },
    {
      name: "Mr. Ghassan Shoeb Residential Villa",
      work: "Design & Built Projects ",
      place: "Saudi Arabia",
      details:
        "The Mr. Ghassan Shoeb Residential Villa in Saudi Arabia exemplifies luxury and modern design. This bespoke project features a seamless fusion of functionality and elegance, tailored to meet the highest standards of comfort. Thoughtfully crafted interiors, premium materials, and meticulous attention to detail create an inviting living environment, complete with multiple spacious balconies that offer stunning views and enhance the overall living experience.",
      images: [
        "/residential/MrGhassan/Picture2.png",
        "/residential/MrGhassan/Picture1.png",
      ],
    },
    {
      name: "Mr. Bin Laden Residential Town Houses",
      work: "Design & Built Projects ",
      place: "Saudi Arabia",
      details:
        "The Mr. Bin Laden Residential Town Houses in Saudi Arabia represent a blend of modern architecture and functionality. This exquisite development features elegant townhouses designed for luxury living, with spacious interiors and high-quality finishes. Notable amenities include underground parking, ensuring convenience and security for residents. Each townhouse is thoughtfully designed to provide a comfortable and stylish living environment, making it an ideal choice for discerning homeowners.",
      images: [
        "/residential/MrBin/Picture1.png",
        "/residential/MrBin/Picture2.png",
        "/residential/MrBin/Picture3.png",
      ],
    },
   
    {
      name: "Private Residence",
      work: "Design & Built Projects ",
      place: "Saudi Arabia",
      details:
        "Private Residence in Saudi Arabia is a stunning example of traditional architecture, featuring a spacious layout that harmonizes modern living with cultural heritage. This residence boasts a large garden, beautifully landscaped to reflect traditional Saudi style, offering a serene outdoor space for relaxation and gatherings. With its elegant design and thoughtful amenities, this home provides a perfect blend of comfort and cultural richness, making it an ideal retreat for families.",
      images: [
        "/residential/PrivateResidenceFour/Picture3.png",
        "/residential/PrivateResidenceFour/Picture1.png",
        "/residential/PrivateResidenceFour/Picture2.png",
        "/residential/PrivateResidenceFour/Picture4.png",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <HeaderWithTitle image={'/project/Residential-Projects.jpg'} title={"residential projects"} />
      <div className=" mx-auto  ">
        <div className=" max-md:space-y-10">
          {projects.map((project, index) => (
           <ProjectSection project={project} key={index} index={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}
