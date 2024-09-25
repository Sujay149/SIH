import React from "react";
import './ResearchProjects.css';

const ResearchProjects = () => {
  // Sample data for the specific research projects
  const researchProjects = [
    {
      id: 1,
      reportTitle: "Publication of Baseline Survey and Vulnerability Assessment Study of Three Identified Regions of Kachchh District",
      yearOfCompletion: 2020,
      researchers: "Archana Goswami, R. Parthasarathy, Sweta Rajpurohit, R.D. Kamboj",
      sponsors: "GEER Foundation, Gandhinagar",
    },
    {
      id: 2,
      reportTitle: "Feminised Agriculture in India: Challenges and Potential",
      yearOfCompletion: 2017,
      researchers: "Itishree Pattnaik and Kuntala Lahiri Dutt",
      sponsors: "Indian Council of Social Science Research, New Delhi",
    },
    {
      id: 3,
      reportTitle: "Farmers of the Future: The Challenges of Feminised Agriculture in India",
      yearOfCompletion: 2017,
      researchers: "Kuntala Lahiri Dutt and Itishree Pattnaik",
      sponsors: "Australian National University, Australia",
    },
    {
      id: 4,
      reportTitle: "Fairtrade Certified Tea in the Hired Labour Sector: An Impact Study and Baseline Data Collection",
      yearOfCompletion: 2017,
      researchers: "P.K. Viswanathan, K.J. Joseph, Karin Astrid Siegmann, Karin Fernando, Romeshun, K.",
      sponsors: "Fairtrade International, UK",
    },
    {
      id: 5,
      reportTitle: "Coping Strategies and Coping Costs of Accessing Safe Water among Smart Cities in India",
      yearOfCompletion: 2017,
      researchers: "Chandra Sekhar Bahinipati",
      sponsors: "TARU Leading Edge, Ahmedabad, India",
    },
    {
      id: 6,
      reportTitle: "Socio Economic Assessment of Potential LMO Adopters in Gujarat",
      yearOfCompletion: 2016,
      researchers: "N. Lalitha",
      sponsors: "Research and Information System for Developing Countries, New Delhi",
    },
    {
      id: 7,
      reportTitle: "Enhancing Agriculture Livelihoods in Coastal Areas: A Study of the Impacts of KVY Phase III in Select Villages in Gujarat",
      yearOfCompletion: 2016,
      researchers: "Viswanathan P.K., Jharna Pathak, Madhusudan Bandi",
      sponsors: "Coastal Salinity Prevention Cell (CSPC), Ahmedabad",
    },
    {
      id: 8,
      reportTitle: "Will Climate Change Adaptation Enhance Farm Productivity? A Study of Micro-Irrigation Systems (MIS) in Gujarat, India",
      yearOfCompletion: 2016,
      researchers: "Chandra Sekhar Bahinipati, P.K. Viswanathan",
      sponsors: "South Asian Network for Development and Environmental Economics (SANDEE), Kathmandu, Nepal",
    },
    {
      id: 9,
      reportTitle: "Addressing Non-Economic Losses and Damages Associated with Climate Change: Learning from the Recent Past Extreme Climatic Events for Future Planning",
      yearOfCompletion: 2016,
      researchers: "Chandra Sekhar Bahinipati",
      sponsors: "Asia Pacific Network for Global Change Research, Kobe, Japan (through the Institute for Global Environmental Strategies, Japan)",
    },
    {
      id: 10,
      reportTitle: "Assessment of System of Crop Intensification in Bihar and Madhya Pradesh: Examining Implications for Sustainable Development",
      yearOfCompletion: 2015,
      researchers: "Jharna Pathak",
      sponsors: "Indian Council of Social Science Research, New Delhi",
    },
    {
      id: 11,
      reportTitle: "Trends in Energy Consumption in Agriculture: An Analysis of Performance of Power Distribution Companies (DISCOMs) in Gujarat",
      yearOfCompletion: 2014,
      researchers: "P.K. Viswanathan",
      sponsors: "Gujarat Electricity Regulatory Commission, Government of Gujarat",
    },
    {
      id: 12,
      reportTitle: "Emergence, Status and Impacts of Adoption of Micro Irrigation Systems (MIS) in India: A Review across Major States and the Areas of Concern for Future Research",
      yearOfCompletion: 2014,
      researchers: "P.K. Viswanathan, Jharna Pathak",
      sponsors: "Indian Council of Social Science Research, New Delhi",
    },
    {
      id: 13,
      reportTitle: "Economic Risk Analysis of Himachal Pradesh",
      yearOfCompletion: 2014,
      researchers: "Jharna Pathak, Chandra Sekhar Bahinipati",
      sponsors: "TARU Leading Edge Private Limited, Gurgaon, Haryana",
    },
    {
      id: 14,
      reportTitle: "Options for Diversification in Tobacco Farming, Bidi Rolling and Tendu Leaf Plucking in India: The Economic Feasibility and Challenges",
      yearOfCompletion: 2014,
      researchers: "Amita Shah (in collaboration with CMDR)",
      sponsors: "International Development Research Centre (through the Centre for Multidisciplinary Research, Dharwad)",
    },
    {
      id: 15,
      reportTitle: "Preparatory Phase of IWMP in Thane and Nasik Divisions in Maharashtra: An Evaluation",
      yearOfCompletion: 2014,
      researchers: "Amita Shah, Hasmukh Joshi",
      sponsors: "National Institute of Rural Development, Hyderabad",
    },
    {
      id: 16,
      reportTitle: "Recent Experiences of Agricultural Growth in Gujarat and Madhya Pradesh: An Enquiry into the Patterns, Process and Impacts",
      yearOfCompletion: 2014,
      researchers: "Amita Shah and Itishree Pattnaik",
      sponsors: "Indian Council of Social Science Research, New Delhi",
    },
    {
      id: 17,
      reportTitle: "Socio-economic Impacts, Institutional and Policy Constraints in the Adoption of Water Saving Technologies in Agriculture: A Comparative Study of Micro Irrigation Systems in India",
      yearOfCompletion: 2013,
      researchers: "P.K. Viswanathan and Jharna Pathak",
      sponsors: "Indian Council of Social Science Research",
    },
    {
      id: 18,
      reportTitle: "Critical Assessment of the Forest Rights Act, 2006 and Its Impact on Livelihoods of the Forest Dependent Communities: A Comparative Study of Chhattisgarh",
      yearOfCompletion: 2013,
      researchers: "Madhusudan Bandi",
      sponsors: "Centre for Economic and Social Studies, Hyderabad through Research Unit for Livelihoods and Natural Resources (Supported by Jamsetji Tata Trust, Mumbai)",
    },
    {
      id: 19,
      reportTitle: "Millennial Goal #1: Poverty Eradication in Rural India: Poverty Reduction and the Community Management of Natural Resources in Gujarat and Madhya Pradesh (Focus on Watershed Development)",
      yearOfCompletion: 2013,
      researchers: "Amita Shah and Shiddalingaswami H.",
      sponsors: "Shastri Indo-Canadian Institute, Canada",
    },
    {
      id: 20,
      reportTitle: "Millennial Goal #1: Poverty Eradication in Rural India: Poverty Reduction and the Community Management of Natural Resources in Gujarat and Madhya Pradesh (Focus on Inland Fisheries)",
      yearOfCompletion: 2013,
      researchers: "Jharna Pathak",
      sponsors: "Shastri Indo-Canadian Institute, Canada",
    },
    {
      id: 21,
      reportTitle: "An Economic Evaluation of Revitalisation of Village Ponds in Gujarat.",
      yearOfCompletion: 2012,
      researchers: "P.K. Viswanathan, Amit Mandal, Ila Mehta",
      sponsors: "Gujarat Land Development Corporation (GLDC Ltd), Government of Gujarat",
    },
    {
      id: 22,
      reportTitle: "Impact of Investment in Watershed projects in Gujarat: A Comprehensive Study.",
      yearOfCompletion: 2012,
      researchers: "Amita Shah, Dipak Nandani, Hasmukh Joshi",
      sponsors: "National Institute of Rural Development, Hyderabad",
    },
    {
      id: 23,
      reportTitle: "Economic Evaluation of Bt Cotton Adoption in Gujarat",
      yearOfCompletion: 2012,
      researchers: "N. Lalitha and P.K. Viswanathan",
      sponsors: "Directorate of Agriculture, Government of Gujarat",
    },
    {
      id: 24,
      reportTitle: "Watershed Based Development and Agricultural Growth in India: An Unfinished Agenda",
      yearOfCompletion: 2012,
      researchers: "Amita Shah",
      sponsors: "National Centre for Agricultural Economics and Policy Research (NCAP), New Delhi",
    },
    {
      id: 25,
      reportTitle: "Catalysing Rural Transformation: Role of Watershed Development Projects in Dry Land and Forest Regions in Maharashtra",
      yearOfCompletion: 2012,
      researchers: "Amita Shah and Samuel Abraham",
      sponsors: "National Bank for Agriculture and Rural Development, Mumbai",
    },
    {
      id: 26,
      reportTitle: "Socio-Economic and Ecological Benefits of Mangrove Plantations: A Study of Community Based Mangrove Restoration Activities in Gujarat",
      yearOfCompletion: 2010,
      researchers: "P.K. Viswanathan, Kinjal Pathak, Ila Mehta",
      sponsors: "Gujarat Ecology Commission (Government of Gujarat)",
    },
    {
      id: 27,
      reportTitle: "Natural Resources and Chronic Poverty in India: A Review of Evidence and Issues",
      yearOfCompletion: 2009,
      researchers: "Amita Shah",
      sponsors: "Department for International Development, UK",
    },
  ];

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Research Projects</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 custom-table">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">S.No</th>
              <th className="border border-gray-300 px-4 py-2">Report Title</th>
              <th className="border border-gray-300 px-4 py-2">Year of Completion</th>
              <th className="border border-gray-300 px-4 py-2">Researchers</th>
              <th className="border border-gray-300 px-4 py-2">Sponsors</th>
            </tr>
          </thead>
          <tbody>
            {researchProjects.map((project, index) => (
              <tr key={project.id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{project.reportTitle}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{project.yearOfCompletion}</td>
                <td className="border border-gray-300 px-4 py-2">{project.researchers}</td>
                <td className="border border-gray-300 px-4 py-2">{project.sponsors}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResearchProjects;