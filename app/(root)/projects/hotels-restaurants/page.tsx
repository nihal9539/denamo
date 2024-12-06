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
        "/hotel/kingabdulla/Picture2.jpg",
        "/hotel/kingabdulla/Picture3.jpg",
        "/hotel/kingabdulla/Picture4.jpg",
        "/hotel/kingabdulla/Picture5.jpg",
        "/hotel/kingabdulla/Picture6.jpg",
      ],
    },
    {
      name: "MBLC Five Star Hotel ",
      work: "Detailed Design",
      place: "Jeddah,KSA",
      details:
        "The detailed architectural and interior designs for the luxurious MBLC Five Star Hotel in Jeddah, Saudi Arabia, showcase a harmonious blend of modern elegance and traditional influences. Every aspect of the project was carefully crafted to create a unique and unforgettable guest experience. From the grand lobbies to the intricately designed rooms, the focus was on delivering exceptional luxury and comfort, making this hotel a distinguished landmark in hospitality design.",
      images: [
        "/hotel/mblc/Picture1.jpeg",
        "/hotel/mblc/Picture2.jpeg",
        "/hotel/mblc/Picture5.jpeg",
        "/hotel/mblc/Picture3.jpeg",
        "/hotel/mblc/Picture4.jpeg",
      ],
    },
    {
      name: "Five-Star Hotel on King Road",
      work: "Detailed Design",
      place: "Jeddah, KSA",
      details:
        "This luxurious five-star hotel on King Road was developed in collaboration with Al-Dewan Saudi Company. Our team provided detailed architectural and interior designs to create an elegant and contemporary space that combines comfort with cutting-edge luxury. The hotel features state-of-the-art amenities, spacious rooms, and a welcoming atmosphere, making it a top destination for business and leisure travelers in Jeddah.",
      images: ["/hotel/king-road/Picture1.jpeg"],
    },
    {
      name: "Al-Zamel Hotel ",
      work: "Detailed Design",
      place: "Jeddah, Saudi Arabia ",
      details:
        "Al-Zamel Hotel is a sophisticated four-star hotel located in the heart of Jeddah, Saudi Arabia. Our team provided comprehensive architectural and interior design services to create a modern, yet welcoming environment for guests. The design emphasizes comfort, luxury, and functionality, offering guests spacious rooms, premium amenities, and a stylish ambiance. Al-Zamel Hotel stands as a premier choice for both business and leisure travelers in Jeddah.",
      images: [
        "/hotel/al-zamel/Picture1.jpeg",
        "/hotel/al-zamel/Picture2.jpeg",
        "/hotel/al-zamel/Picture3.jpeg",
      ],
    },
    {
      name: "JW Marriott Hotel & Resort",
      work: "Detailed Design",
      place: "Jeddah, Saudi Arabia ",
      details:
        "The JW Marriott Hotel & Resort in Jeddah is a luxurious hospitality project designed in collaboration with Zuhair Fayez Partnership, Architect Hamed Nassar, and Al-Nagah Group. Spanning over 168,000 square meters, this five-star hotel and resort combines cutting-edge design with unmatched luxury. Our detailed design focuses on creating an exceptional guest experience, offering a blend of modern aesthetics and timeless comfort. The expansive resort includes world-class amenities, extensive conference spaces, and elegant recreational facilities, making it a premier destination for both business and leisure travelers.",

      images: [
        "/hotel/jw-marriot/Picture1.jpeg",
        "/hotel/jw-marriot/Picture2.jpeg",
        "/hotel/jw-marriot/Picture3.jpeg",
        "/hotel/jw-marriot/Picture4.jpeg",
      ],
    },
    {
      name: "Wellness Center Hotel & Resort",
      work: "Detailed Design",
      place: "Dubai, UAE",
      details:
        "The Wellness Center Hotel & Resort in Dubai is a state-of-the-art development designed to promote health, relaxation, and luxury. In collaboration with Zuhair Fayez Partnership, this expansive resort spans over 350,000 square meters and offers a unique fusion of wellness and hospitality. The design emphasizes tranquil surroundings, world-class spa facilities, and an environment focused on rejuvenation. The resort includes luxurious accommodations, wellness retreats, fitness centers, and holistic services, ensuring guests experience the highest standard of relaxation and well-being.",
      images: [
        "/hotel/wellness/Picture1.jpeg",
        "/hotel/wellness/Picture2.jpeg",
        "/hotel/wellness/Picture3.jpeg",
      ],
    },
    {
      name: "KKU Faculty Club",
      work: "Detailed Design",
      place: "ABHA, Saudi Arabia ",
      details:
        "The KKU Faculty Club is a prestigious project located in Abha, Saudi Arabia. The detailed design work focuses on creating a modern and functional space for the faculty members of King Khalid University. Covering a project area of 50,000 square meters, the club is designed to provide a comfortable and enriching environment for academic professionals. The design incorporates luxurious amenities, leisure facilities, and meeting spaces, ensuring that the faculty has access to a sophisticated and well-equipped venue for social and professional engagements.",
      images: [
        "/hotel/kku/Picture1.jpeg",
        "/hotel/kku/Picture2.jpeg",
        "/hotel/kku/Picture3.jpeg",
      ],
    },
    {
      name: "Holiday Inn Express",
      work: "Detailed Design",
      place: "Jeddah, Saudi Arabia ",
      details:
        "The Holiday Inn Express in Jeddah, Saudi Arabia, is a four-star hotel developed with detailed design collaboration between Zuhair Fayez Partnership (ZFP) and Eng. Loai Mattar. The project focuses on creating a modern and comfortable hotel experience that caters to both business and leisure travelers. With thoughtfully designed rooms, contemporary amenities, and a welcoming atmosphere, this hotel provides an ideal stay in the heart of Jeddah, offering exceptional value and comfort for its guests.",
      images: [
        "/hotel/holiday-in-express/Picture1.jpeg",
        "/hotel/holiday-in-express/Picture2.jpeg",
        "/hotel/holiday-in-express/Picture3.jpeg",
      ],
    },
    {
      name: "Marriott Hotel",
      work: "Detailed Design",
      place: " Florida, USA ",
      details:
        "The Marriott Hotel in Florida, USA, is a premium hospitality project designed with meticulous attention to detail in collaboration with Zuhair Fayez Partnership (ZFP) and Eng. Loai Mattar. The design focuses on delivering an exceptional guest experience through modern architecture, luxurious interiors, and state-of-the-art amenities. From spacious guest rooms to elegantly designed common areas, the hotel embodies the Marriott brand’s commitment to comfort and sophistication. This project is a testament to the seamless integration of functionality and aesthetics in hospitality design.",
      images: [
        "/hotel/marriot-florida/Picture1.jpeg",
        "/hotel/marriot-florida/Picture2.jpeg",
        "/hotel/marriot-florida/Picture3.jpeg",
        "/hotel/marriot-florida/Picture4.jpeg",
      ],
    },
    {
      name: "Brazilian Court Hotel",
      work: "Detailed Design",
      place: "Miami, Florida, USA",
      details:
        "The Brazilian Court Hotel in Miami, Florida, is a luxurious retreat renowned for its elegant aesthetic, serene ambiance, and exceptional amenities. Designed with meticulous detail, the hotel features a stunning pool area, a world-class spa, and interiors that exude timeless sophistication. The design blends modern luxury with classic charm, creating a perfect haven for relaxation and indulgence. Whether enjoying the tranquil poolside setting or unwinding in the spa, guests are treated to a distinctive experience that reflects the spirit of Miami's vibrant culture and elegance.",
      images: [
        "/hotel/brazilian/Picture1.jpeg",
        "/hotel/brazilian/Picture2.jpeg",
        "/hotel/brazilian/Picture3.jpeg",
        "/hotel/brazilian/Picture4.jpeg",
        "/hotel/brazilian/Picture5.jpeg",
      ],
    },
    {
      name: "Renaissance Hotel",
      work: "Detailed Design",
      place: "Florida, USA",
      details:
        "The Renaissance Hotel in Florida, USA, is a masterpiece of detailed design that merges contemporary luxury with timeless sophistication. This project features carefully crafted interiors and exteriors that emphasize both style and functionality. With world-class accommodations, refined dining spaces, and modern amenities, the hotel provides an exceptional experience for guests. Its unique design elements reflect the vibrant culture of Florida while maintaining the elegance associated with the Renaissance brand.",
      images: [
        "/hotel/renaissance/Picture1.jpeg",
        "/hotel/renaissance/Picture2.jpeg",
        "/hotel/renaissance/Picture3.jpeg",
        "/hotel/renaissance/Picture4.jpeg",
        "/hotel/renaissance/Picture5.jpeg",
      ],
    },
    {
      name: "Aramco Hotel",
      work: "Detailed Design",
      place: "Khafji, Saudi Arabia ",
      details:
        "The Aramco Hotel in Khafji, Saudi Arabia, is a premium hospitality project showcasing a blend of modern design and functional elegance. This detailed design project emphasizes luxurious accommodations, state-of-the-art facilities, and seamless integration with the surrounding environment. Crafted to meet the highest standards, the hotel offers an inviting atmosphere for both corporate and leisure guests, reflecting the region's rich culture and Aramco's commitment to excellence.",
      images: ["/hotel/aramco-hotel/Picture2.jpeg"],
    },
    {
      name: "Officers Club",
      work: "Detailed Design",
      place: "Riyadh, Saudi Arabia",
      details:
        "The Officers Club in Riyadh, Saudi Arabia, is a prestigious project designed to offer an exceptional environment for leisure, social, and professional gatherings. The detailed design focuses on creating elegant spaces that include state-of-the-art facilities, luxurious lounges, and recreational areas. This project reflects a commitment to quality and functionality, catering to the needs of its distinguished members while incorporating modern architectural aesthetics and cultural elements of Saudi Arabia.",
      images: [
        "/hotel/officers-club/Picture1.jpeg",
        "/hotel/officers-club/Picture2.jpeg",
        "/hotel/officers-club/Picture3.jpeg",
      ],
    },
    {
      name: "AL-RIYADAH HOTEL",
      work: " Interior Design Projects",
      place: "Madinah, SAUDI ARABIA",
      details:
        "The AL-RIYADAH HOTEL in Madinah, Saudi Arabia, represents a remarkable project encompassing architectural design, engineering excellence, and meticulous construction. With a focus on modern interiors and innovative layouts, the hotel integrates cutting-edge engineering solutions with sleek architectural aesthetics. This comprehensive approach ensures a harmonious balance between functionality and luxury, delivering an exceptional experience for guests. The project stands as a testament to the commitment to quality and modern design standards in the hospitality industry.",
      images: [
        "/hotel/al-riyadh/Picture1.jpeg",
        "/hotel/al-riyadh/Picture2.jpeg",
        "/hotel/al-riyadh/Picture3.jpeg",
        "/hotel/al-riyadh/Picture4.jpeg",
        "/hotel/al-riyadh/Picture5.jpeg",
      ],
    },
    {
      name: "Conference spaces for ARAMCO",
      work: " Interior Design Projects",
      place: "Dammam, KSA",
      details:
        "The Conference Spaces for ARAMCO in Dammam, KSA, feature state-of-the-art interior design tailored to accommodate high-profile events and corporate gatherings. The design blends functionality with aesthetic appeal, incorporating premium materials and advanced lighting solutions for an engaging atmosphere. With spacious seating arrangements, acoustically optimized spaces, and modern decor elements, the conference halls provide a professional yet inviting setting. These spaces are a reflection of ARAMCO’s commitment to excellence and innovation in their facilities.",
      images: [
        "/hotel/conference-aramco/Picture1.jpeg",
        "/hotel/conference-aramco/Picture2.jpeg",
        "/hotel/conference-aramco/Picture3.jpeg",
      ],
    },
    {
      name: "The Empress Hotel",
      work: " Design & Built Projects",
      place: "Chicago, IL. USA",
      details:
        "The Empress Hotel in Chicago, Illinois, stands as a masterpiece of aesthetic interior design. Every corner of the hotel reflects elegance, blending modern luxury with timeless charm. From the intricately crafted furniture to the soothing color palettes, each element is designed to create an atmosphere of serenity and sophistication. Guests are welcomed with stunning lobby spaces, artistically lit corridors, and rooms adorned with bespoke decor and textures that define comfort and style. This hotel is a haven for those who appreciate fine details and artistic interiors.",
      images: [
        "/hotel/empress/Picture1.jpeg",
        "/hotel/empress/Picture2.jpeg",
        "/hotel/empress/Picture3.jpeg",
        "/hotel/empress/Picture4.jpeg",
        "/hotel/empress/Picture5.jpeg",
        "/hotel/empress/Picture6.jpeg",
        "/hotel/empress/Picture7.jpeg",
      ],
    },
    {
      name: " The Silver Legacy Hotel",
      work: " Design & Built Projects",
      place: " Reno, NV, USA",
      details:
        "The Silver Legacy Hotel in Reno, Nevada, is a stunning example of innovative design and luxurious hospitality. Situated in the heart of the city, this hotel combines modern aesthetics with a touch of vintage charm. The interiors feature carefully curated elements, including elegant lighting, plush furnishings, and unique architectural details that create an inviting atmosphere. Guests can enjoy world-class amenities, spacious accommodations, and breathtaking views of the surrounding mountains, making it a premier destination for travelers seeking comfort and style.",

      images: [
        "/hotel/silver-legancy-hotel/Picture1.jpeg",
        "/hotel/silver-legancy-hotel/Picture2.jpeg",
        "/hotel/silver-legancy-hotel/Picture3.jpeg",
      ],
    },
    {
      name: "The DRAKE Hotel",
      work: " Design & Built Projects",
      place: "Chicago, IL. USA",
      details:
        "The DRAKE Hotel in Chicago, Illinois, is an iconic establishment that embodies timeless elegance and architectural excellence. Located in one of the most vibrant cities in the world, the hotel offers a unique blend of historic charm and modern luxury. Guests are welcomed by exquisitely designed interiors, featuring rich textures, opulent finishes, and meticulous attention to detail. From its luxurious suites to its sophisticated common areas, The DRAKE Hotel is a symbol of Chicago’s grand hospitality tradition, providing a memorable experience for every guest.",

      images: [
        "/hotel/the-drake/Picture1.jpeg",
        "/hotel/the-drake/Picture2.jpeg",
      ],
    },

    {
      name: "The Teamsters Building",
      work: "Design & Built Projects",
      place: "Chicago, IL. USA",
      details:
        "The Teamsters Building in Chicago, Illinois, is a testament to architectural innovation and functional design. This landmark project combines modern aesthetics with robust construction, reflecting its significance as a cornerstone of the community. The interiors are designed to provide a harmonious blend of practicality and style, featuring spacious layouts, high-quality materials, and attention to every detail. Located in a bustling urban environment, the building serves as a hub for collaboration and productivity, making it an exemplary addition to Chicago’s architectural landscape.",
      images: [
        "/hotel/teamsters/Picture1.jpeg",
        "/hotel/teamsters/Picture2.jpeg",
        ,
      ],
    },
    {
      name: " Casablanca Restaurant",
      work: "Design & Built Projects",
      place: "Chicago, IL. USA",
      details: "Casablanca Restaurant in Chicago, Illinois, offers a unique dining experience that combines exotic elegance with modern charm. Inspired by the timeless allure of Morocco, the restaurant’s interiors are a fusion of rich textures, warm colors, and intricate patterns that transport guests to a world of luxury and intimacy. From the beautifully crafted furnishings to the ambient lighting, every detail is thoughtfully designed to create a memorable atmosphere. Guests can enjoy exquisite cuisine in an inviting space that celebrates both tradition and contemporary flair."
,
      images: [
        "/hotel/casablanca/Picture1.jpeg",
        "/hotel/casablanca/Picture2.jpeg",
      ],
    },
    {
      name: "Sir Francis Drake Hotel",
      work: " Interior Design Projects",
      place: "St. Francisco, CA. USA",
      details: "The Sir Francis Drake Hotel in San Francisco, California, blends historic grandeur with modern sophistication. Located in the heart of the city, this iconic hotel is renowned for its luxurious interiors, featuring a blend of classic and contemporary design elements. The elegant decor showcases a rich palette of colors, opulent textures, and stylish furnishings, offering guests an exceptional experience. With its refined ambiance and exceptional service, the Sir Francis Drake Hotel remains a prestigious destination for travelers seeking both comfort and style in one of America's most dynamic cities."
,
      images: [
        "/hotel/francis-drake/Picture1.jpeg",
        "/hotel/francis-drake/Picture2.jpeg",
        "/hotel/francis-drake/Picture3.jpeg",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <HeaderWithTitle image={"/project/hotel-.jpg"} title={"Hotel and Resturents projects"} />

      <div className=" mx-auto  ">
        <div className=" max-md:space-y-10">
          {projects.map((project, index) => (
            <ProjectSection project={project} key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
