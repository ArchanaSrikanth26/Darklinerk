import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import img1 from "../assets/images/img4.jpeg";
import img2 from "../assets/images/img5.jpeg";
import img3 from "../assets/images/img6.jpeg";
import img4 from "../assets/images/img5.jpeg";
import img5 from "../assets/images/img4.jpeg";
import img6 from "../assets/images/img6.jpeg";
import img7 from "../assets/images/img6.jpeg";
import img8 from "../assets/images/img5.jpeg";
import img9 from "../assets/images/img4.jpeg";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Modified Bitumen",
      image: img1,
      description: "Modified Bitumen is an advanced road construction material enhanced with polymers such as Styrene-Butadiene-Styrene (SBS) or Atactic Polypropylene (APP). These additives significantly improve the material's elasticity, durability, and resistance to extreme temperatures and heavy traffic loads. It is ideal for high-performance applications like highways, airport runways, and bridge decks, offering enhanced fatigue resistance, reduced rutting, and extended pavement life. Modified Bitumen is also highly adaptable to various climates, making it a preferred choice for both hot and cold regions."
    },
    {
      id: 2,
      name: "Bitumen Emulsions",
      image: img2,
      description: "Bitumen Emulsions are a versatile, eco-friendly solution composed of bitumen, water, and an emulsifying agent, enabling application at ambient temperatures. This eliminates the need for heating, reducing energy consumption and emissions. They are widely used in road maintenance, surface dressing, tack coats, and cold mix asphalt applications. Their excellent adhesion properties ensure strong bonding between pavement layers, while their ease of use makes them suitable for small-scale repairs and large-scale projects alike. Available in various grades, they cater to specific project requirements."
    },
    {
      id: 3,
      name: "Micro Surfacing Emulsions (CQS)",
      image: img3,
      description: "Micro Surfacing Emulsions (Cationic Quick Set, CQS) are specialized emulsions designed for rapid-setting micro surfacing applications. These emulsions are formulated to provide superior skid resistance, seal existing pavement surfaces, and protect against water infiltration and oxidation. Ideal for high-traffic roads and preventive maintenance, CQS emulsions extend pavement life by filling cracks and improving surface texture. Their quick-setting nature allows for faster traffic reopening, minimizing disruptions, and their durability ensures long-lasting performance in demanding conditions."
    },
    {
      id: 4,
      name: "Viscosity Grade Bitumen",
      image: img4,
      description: "Viscosity Grade Bitumen is classified based on its viscosity at specific temperatures, ensuring consistent performance in road construction. It is primarily used in hot mix asphalt for paving roads, offering excellent workability and compaction properties. VG Bitumen grades (e.g., VG-10, VG-30, VG-40) are tailored for different climatic conditions and traffic loads, providing optimal flexibility, stability, and resistance to deformation. This makes it a reliable choice for constructing durable pavements in diverse environments, from urban roads to rural highways."
    },
    {
      id: 5,
      name: "Penetration Grade Bitumen",
      image: img5,
      description: "Penetration Grade Bitumen is categorized by its penetration value, which measures the hardness of the bitumen. It is widely used in road construction and asphalt paving due to its excellent binding properties and ability to withstand varying traffic and weather conditions. Common grades (e.g., 60/70, 80/100) are selected based on project requirements, ensuring optimal performance in terms of flexibility, durability, and resistance to cracking. This type of bitumen is a staple in infrastructure projects worldwide."
    },
    {
      id: 6,
      name: "Industrial Grade Mastic Bitumen",
      image: img6,
      description: "Industrial Grade Mastic Bitumen is a robust, semi-solid material used in industrial applications such as waterproofing, sealing, and joint filling. It is highly resistant to chemical exposure, moisture, and temperature fluctuations, making it ideal for roofing, tank linings, and bridge deck waterproofing. Its thick, viscous consistency allows it to fill gaps and create a durable, protective layer, ensuring long-term performance in harsh industrial environments. Mastic Bitumen is also used in pavement crack sealing for enhanced durability."
    },
    {
      id: 7,
      name: "Performance Grade Bitumen",
      image: img7,
      description: "Performance Grade (PG) Bitumen is engineered to meet specific performance criteria under varying climatic and traffic conditions. Developed under the Superpave system, PG Bitumen is tested for high- and low-temperature performance, ensuring resistance to rutting, fatigue, and thermal cracking. Grades like PG 64-22 or PG 76-10 are tailored for extreme conditions, making them suitable for heavy-duty pavements, airports, and high-traffic highways. Its advanced properties ensure superior durability and reduced maintenance costs."
    },
    {
      id: 8,
      name: "Cut Back Bitumen",
      image: img8,
      description: "Cut Back Bitumen is produced by blending bitumen with a volatile solvent to reduce viscosity, allowing for easier application at lower temperatures. It is commonly used in surface dressing, prime coats, and tack coats, providing excellent adhesion and penetration into pavement surfaces. Available in rapid, medium, and slow-curing grades (RC, MC, SC), it is versatile for various construction needs. Once the solvent evaporates, the bitumen hardens, forming a strong, durable layer for road surfaces."
    },
    {
      id: 9,
      name: "Other Products",
      image: img9,
      description: "Our range of other products includes specialized bitumen-based solutions such as bitumen paints, sealants, and membranes designed for niche applications. These products are used in waterproofing, corrosion protection, and pavement preservation, offering tailored solutions for unique project requirements. Formulated with high-quality materials, they provide excellent durability, flexibility, and resistance to environmental factors, ensuring reliable performance in construction, industrial, and maintenance applications."
    }
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4 flex">
      <div className="w-1/2 pr-4">

        <img
          src={product.image}
          alt={product.name}
          className="w-64 h-64 object-cover border-4 border-yellow-500"
        />

      </div>
      <div className="w-1/2 pl-4">
        <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-700">{product.description}</p>
        <button
          className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          onClick={() => navigate('/products')}
        >
          BACK TO PRODUCTS
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;