"use client";
import HeaderWithTitle from "@/components/HeaderWithTitle";
import ProjectSection from "@/components/ProjectSection";

export default function EducationalProjects() {
  const projects = [
    {
        name: "King Abdullah Civic Center",
        work: "Detailed Design & Engineering",
        place: "DAMMAM,KSA",
        details:
          "The King Abdullah Civic Center is a landmark project that enhances community services and engagement. In collaboration with AI Architecture LLC (USA) and Zuhair Fayez Partnership (KSA), our team delivered comprehensive design and engineering services. Spanning 630,000 square meters, the center features modern facilities for community events, promoting inclusivity and connectivity while reflecting the cultural values of Dammam.",
        images: [
          "/community/kingabdulla/Picture2.jpg",
          "/community/kingabdulla/Picture3.jpg",
          "/community/kingabdulla/Picture4.jpg",
          "/community/kingabdulla/Picture5.jpg",
          "/community/kingabdulla/Picture6.jpg",
        ],
      },
    {
        name: "MBLC Five Star Hotel ",
        work: "Detailed Design",
        place: "Jeddah,KSA",
        details: "The detailed architectural and interior designs for the luxurious MBLC Five Star Hotel in Jeddah, Saudi Arabia, showcase a harmonious blend of modern elegance and traditional influences. Every aspect of the project was carefully crafted to create a unique and unforgettable guest experience. From the grand lobbies to the intricately designed rooms, the focus was on delivering exceptional luxury and comfort, making this hotel a distinguished landmark in hospitality design.",
        images: [
          "/community/kingabdulla/Picture2.jpg",
        ],
      },
      {
        name: "Five-Star Hotel on King Road",
        work: "Detailed Design",
        place: "Jeddah, KSA",
        details: "This luxurious five-star hotel on King Road was developed in collaboration with Al-Dewan Saudi Company. Our team provided detailed architectural and interior designs to create an elegant and contemporary space that combines comfort with cutting-edge luxury. The hotel features state-of-the-art amenities, spacious rooms, and a welcoming atmosphere, making it a top destination for business and leisure travelers in Jeddah.",
        images: [
          "/community/kingabdulla/Picture2.jpg"
        ]
      },
      {
        name: "Al-Zamel Hotel ",
        work: "Detailed Design",
        place: "Jeddah, Saudi Arabia ",
        details: "Al-Zamel Hotel is a sophisticated four-star hotel located in the heart of Jeddah, Saudi Arabia. Our team provided comprehensive architectural and interior design services to create a modern, yet welcoming environment for guests. The design emphasizes comfort, luxury, and functionality, offering guests spacious rooms, premium amenities, and a stylish ambiance. Al-Zamel Hotel stands as a premier choice for both business and leisure travelers in Jeddah.",
        images: [
          "/community/kingabdulla/Picture2.jpg"
        ]
      },
      {
        name: " JW Marriott Hotel & Resort",
        work: "Detailed Design",
        place: "Jeddah, Saudi Arabia ",
        details: "The JW Marriott Hotel & Resort in Jeddah is a luxurious hospitality project designed in collaboration with Zuhair Fayez Partnership, Architect Hamed Nassar, and Al-Nagah Group. Spanning over 168,000 square meters, this five-star hotel and resort combines cutting-edge design with unmatched luxury. Our detailed design focuses on creating an exceptional guest experience, offering a blend of modern aesthetics and timeless comfort. The expansive resort includes world-class amenities, extensive conference spaces, and elegant recreational facilities, making it a premier destination for both business and leisure travelers.",

        images: [
          "/community/kingabdulla/Picture2.jpg"
        ]
      },
      {
        name: "Wellness Center Hotel & Resort",
        work: "Detailed Design",
        place: "Dubai, UAE",
        details: "The Wellness Center Hotel & Resort in Dubai is a state-of-the-art development designed to promote health, relaxation, and luxury. In collaboration with Zuhair Fayez Partnership, this expansive resort spans over 350,000 square meters and offers a unique fusion of wellness and hospitality. The design emphasizes tranquil surroundings, world-class spa facilities, and an environment focused on rejuvenation. The resort includes luxurious accommodations, wellness retreats, fitness centers, and holistic services, ensuring guests experience the highest standard of relaxation and well-being.",
        images: [
          "/community/kingabdulla/Picture2.jpg"
        ]
      },
      {
        name: "Wellness Center Hotel & Resort",
        work: "Detailed Design",
        place: "Dubai, UAE",
        details: "The Wellness Center Hotel & Resort in Dubai is a state-of-the-art development designed to promote health, relaxation, and luxury. In collaboration with Zuhair Fayez Partnership, this expansive resort spans over 350,000 square meters and offers a unique fusion of wellness and hospitality. The design emphasizes tranquil surroundings, world-class spa facilities, and an environment focused on rejuvenation. The resort includes luxurious accommodations, wellness retreats, fitness centers, and holistic services, ensuring guests experience the highest standard of relaxation and well-being.",
        images: [
          "/community/kingabdulla/Picture2.jpg"
        ]
      },
      
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <HeaderWithTitle title={"Hotel and Resturents projects"} />

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
