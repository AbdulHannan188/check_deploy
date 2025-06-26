import React from "react";
import { motion, useScroll } from "motion/react";
import { inView } from "motion/react";
import { delay } from "motion";
import { img } from "motion/react-client";

const initialData = [
  {
    img: "/",
    id: 1,
    main: "Software Development",
    d1: "Custom software applications built with modern technologies for optimal performance.",
    l1: "Web Development",
    l2: "Mobile Development",
    l3: "Enterprise Solutions",
    l4: "Custom CRM/ERP",
  },
  {
    id: 2,
    main: " Development",
    d1: "Custom software applications built with modern technologies for optimal performance.",
    l1: "Web Development",
    l2: "Mobile Development",
    l3: "Enterprise Solutions",
    l4: "Custom CRM/ERP",
  },
  {
    id: 3,
    main: " Development",
    d1: "Custom software applications built with modern technologies for optimal performance.",
    l1: "Web Development",
    l2: "Mobile Development",
    l3: "Enterprise Solutions",
    l4: "Custom CRM/ERP",
  },
  {
    id: 4,
    main: " Development",
    d1: "Custom software applications built with modern technologies for optimal performance.",
    l1: "Web Development",
    l2: "Mobile Development",
    l3: "Enterprise Solutions",
    l4: "Custom CRM/ERP",
  },
  {
    id: 5,
    main: " Development",
    d1: "Custom software applications built with modern technologies for optimal performance.",
    l1: "Web Development",
    l2: "Mobile Development",
    l3: "Enterprise Solutions",
    l4: "Custom CRM/ERP",
  },
  {
    id: 6,
    main: " Development",
    d1: "Custom software applications built with modern technologies for optimal performance.",
    l1: "Web Development",
    l2: "Mobile Development",
    l3: "Enterprise Solutions",
    l4: "Custom CRM/ERP",
  },
];
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};
const Services = [
  {
    id: 1,
    h3: "Software Development",
    // src: FaPaintRoller,
    des: "Code Expert is an expert at creating custom software that is reliable, scalable, and appropriately matched to your company specific needs. Whether you require enterprise software, integrated solutions, or a custom application, our experience promises excellent outcomes that advance your company.",
    des2: "Code Expert is an expert at creating custom software that is reliable, scalable, and appropriately matched to your company ; specific needs. Whether you require enterprise software, integrated solutions, or a custom application, our experience promises excellent outcomes that advance your company. ",
    to: "/services",
  },
  {
    id: 2,
    h3: "Digital Design",
    // src: MdDesignServices,
    des: "We design digital products that will personify your brand perfectly while providing a seamless experience to your consumers across all platforms and devices.",
    des2: "Code Expert is an expert at creating custom software that is reliable, scalable, and appropriately matched to your company; specific needs. Whether you require enterprise software, integrated solutions, or a custom application, our experience promises excellent outcomes that advance your company. ",
    to: "/design",
  },
  {
    id: 3,
    h3: "AI Solutions",
    // src: SiAntdesign,
    des: "We design state-of-the-art AI solutions customised to each clients unique needs while optimising project cost and minimising risks.",
    des2: "Our experienced consultants and IT professionals have relevant experience in AI technologies and frameworks. You will just need to connect with us for your AI integration needs, and we will design a solution tailored for your business. ",
    to: "/ai-service",
  },
  {
    id: 4,
    h3: "SEO",
    // src: TbSeo,
    des: "Our SEO services will drive measurable growth for your business with enhanced online visibility through in-depth audits, strategic content strategies, and link building.",
    des2: "Our experts recognize and then implement strategic keyword sets for driving organic traffic as well as content alignment. ",
    to: "/services/seo",
  },
  {
    id: 5,
    h3: "Digital marketing",
    // src: SiCodesignal,
    des: "Our full-service, versatile, and dynamic digital marketing services are your first bet to the design strategies that will help you attract new clients and retain the old ones as well.",
    des2: "Our content marketing strategy can help you deliver the right content and information to your audience that will create an impeccable image of your business. Lets; create magic with our content marketing services",
    to: "/services/digital-marketing",
  },
  {
    id: 6,
    h3: "Cloud Solution",
    // src: FaCloud,
    des: "Our ultimate cloud solutions enable businesses to enhance their productivity while reducing their overheads and reduced time-to-market while switching to the cloud atmosphere seamlessly. ",
    des2: "Our Cloud DevOps solutions help businesses simplify their operations so that they become faster andbetter. Team Code Expert will enable you to use futuristic software delivery for unparalleled agility and velocity. ",
    to: "/cloud-service",
  },
];

function App() {
  const scaleYProgress = useScroll().scrollYProgress;
  return (
    <>
      <div id="data">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas
        soluta sint esse recusandae repellat cum voluptates dicta, nihil error
        quaerat. Cum corrupti molestiae itaque, nam necessitatibus laborum
        voluptatibus nisi eligendi sequi assumenda odio ipsa, nulla enim impedit
        nesciunt. Eveniet harum laudantium, libero vitae fuga qui iste aperiam
        temporibus cumque corporis tempora provident accusantium itaque officia
        omnis beatae aliquid et illo inventore vel necessitatibus! Pariatur
        minus expedita omnis rem adipisci totam aspernatur dolores reprehenderit
        hic iure a maiores vitae quasi tempora maxime possimus eligendi,
        dignissimos nobis suscipit enim itaque. Consectetur illo obcaecati
        blanditiis tempora ab aliquam rerum sed possimus quos est reiciendis
        accusantium cum eveniet doloribus aspernatur corporis voluptatum
        consequatur molestias, natus vitae. Quibusdam aperiam numquam culpa
        quasi sed, ipsam illo reiciendis commodi asperiores quod eaque ducimus
        labore minima minus sunt deleniti itaque quo. Ab ratione dignissimos
        soluta aut deserunt laborum dolor possimus beatae. Autem deserunt, iure
        veniam nobis expedita corporis veritatis itaque nulla repellat non enim
        neque et. Voluptatibus cupiditate praesentium assumenda atque, cum
        perferendis, maxime impedit sit esse quam iste debitis accusantium!
        Reprehenderit, corporis eligendi? Perferendis repellendus sed
        consequatur excepturi. Quia saepe explicabo illo autem illum doloribus a
        odio. Quia sequi quae aperiam non eaque asperiores quo vero possimus,
        magnam iste? Quod quam tempora ea repellendus ut veritatis soluta
        consequatur quisquam est dolor dolores blanditiis repudiandae, quidem
        consequuntur pariatur aliquid porro, nulla, mollitia dolorem natus!
        Omnis quasi perspiciatis molestias amet deleniti magni recusandae maxime
        inventore a illum in, facere voluptatibus officiis dolore! Tempore esse
        harum qui sed asperiores explicabo libero cumque est incidunt ex
        dolorum, tempora amet, quam eaque, perferendis iusto tenetur rem
        molestias aut laboriosam quia veniam facere illum? Perspiciatis eum
        corporis deleniti fugiat! Eveniet obcaecati magni, non iure
        exercitationem expedita ullam est quaerat recusandae nisi repellat
        temporibus placeat molestiae alias cum nobis reprehenderit numquam vel.
        Dolore quam, quisquam quos sit maxime consectetur cumque quod
        praesentium facere repudiandae voluptates veniam molestias id quia.
        Sequi facere nesciunt esse. Sed ratione animi reprehenderit illum eos,
        non molestias voluptatum tenetur sint similique, exercitationem magnam
        distinctio aliquid id doloremque, placeat quo vel est vero quasi quod
        doloribus? Amet dolorum ex esse ut, velit atque omnis! Sint excepturi
        ipsa temporibus provident culpa iste laborum saepe impedit ut enim eius
        earum cumque minus ullam in consequatur quo voluptate exercitationem
        tenetur nesciunt nulla ipsum, iure vitae sed. Adipisci fugiat pariatur
        repudiandae libero excepturi. Assumenda quibusdam facere distinctio,
        iusto consequuntur cum necessitatibus provident illo? Soluta possimus
        animi eveniet eum corrupti quam quia harum cumque rem modi fugiat
        quisquam aperiam deleniti laborum accusantium neque veniam debitis quas,
        sunt voluptates saepe voluptatum minima vero suscipit? Laudantium non
        placeat optio, nisi voluptate corporis! Blanditiis ipsam minus eos,
        voluptatum modi ducimus quaerat soluta similique quae placeat sequi
        animi at et quis voluptates laboriosam eaque labore vitae repellat
        adipisci culpa delectus sapiente quasi? Quaerat vero eum commodi,
        tempore doloremque enim neque molestiae rerum obcaecati nihil impedit
        velit atque illum voluptate, odit minus maiores cupiditate et recusandae
        error libero. Laudantium esse mollitia fugiat. Ullam molestias nihil
        repellat. Odio delectus neque sit ipsa, eaque maiores velit et voluptas,
        repudiandae quasi modi nostrum quae placeat. Unde, dolorem. Pariatur
        dolor harum aut natus facere explicabo ratione eaque excepturi cumque et
        dolores dicta dignissimos, animi rerum porro, tenetur itaque aliquid.
        Non nihil magnam et! Incidunt dicta eveniet id nulla explicabo quidem
        nesciunt, in dolor, quibusdam dolores accusantium! Voluptatibus quos
        unde ipsum laudantium saepe suscipit eum dolor, repellat similique neque
        nisi amet! Voluptatum repudiandae tenetur ratione ex dolor, quas autem
        voluptatibus quidem minima sequi expedita. Non molestiae fugiat voluptas
        amet, sapiente natus reiciendis nihil totam vel nulla aliquid unde illum
        beatae soluta architecto excepturi similique corrupti laborum?
        Perferendis, laborum. Voluptas iste dolorum asperiores commodi delectus
        a provident! Vel reiciendis voluptatibus nisi ab debitis quod odit
        beatae rem nesciunt praesentium perspiciatis, laborum reprehenderit,
        eligendi, autem commodi aperiam placeat iusto maxime fugit laboriosam
        veniam? Excepturi quia ut autem suscipit odio doloribus ratione
        temporibus libero enim? Necessitatibus dolorem qui culpa neque maiores,
        magni odit cupiditate! Enim nostrum nemo alias similique consequatur
        optio vel voluptate maxime laborum repellendus labore corporis quam
        nobis nam, quae dolorem, officia necessitatibus laudantium dicta
        veritatis sed aperiam architecto dignissimos cum! Iste, doloremque
        laboriosam! In ullam ex aperiam adipisci perferendis similique quis
        quasi cupiditate, officia numquam atque illo fuga unde necessitatibus
        dicta autem quas expedita commodi nostrum perspiciatis. Quidem nostrum,
        quod placeat, sequi possimus consequuntur in praesentium unde quo
        asperiores quas cumque sed vero expedita repudiandae? Sit delectus nihil
        sint quo consequatur repellat id harum unde soluta molestias, amet ipsum
        facilis earum aliquid est quidem at maiores dolor omnis necessitatibus
        architecto ad! Soluta, est? Nemo consectetur accusantium ullam animi sed
        cumque delectus et quidem non ab facere ipsum, laudantium vitae repellat
        perspiciatis ad obcaecati modi maxime veritatis ipsa nam autem. Quis
        recusandae ut, rem dolores provident optio ex totam tempora soluta
        mollitia et tenetur velit. Amet unde quam officiis? Necessitatibus
        doloremque voluptates reiciendis aut quo eius ut ab magnam qui, aliquid
        illum cumque autem culpa a asperiores perferendis quod pariatur enim
        harum et veniam neque earum voluptatum. Nobis amet odit nihil quidem
        ullam illum veniam quam esse velit a repudiandae corrupti, unde hic
        praesentium placeat veritatis saepe distinctio nostrum, non asperiores.
        Iusto iure id unde adipisci doloribus accusamus a, in officia reiciendis
        provident vero corporis ipsa dolorem nesciunt deleniti, velit tempora
        quibusdam inventore dolore vitae quo possimus nulla? Inventore iste
        consequuntur a sunt reiciendis iure voluptas eaque, harum, dolor tempora
        exercitationem cupiditate, tenetur accusamus aliquid consectetur natus
        necessitatibus incidunt cum. Perspiciatis sint nemo consequatur pariatur
        delectus, voluptatibus quaerat optio nisi deleniti debitis nesciunt
        voluptates placeat error aut totam mollitia modi neque numquam! Eaque
        vel voluptate voluptas veniam est modi in obcaecati quia accusamus, esse
        facilis suscipit quaerat natus laboriosam, iure earum dolores
        doloremque! Quia corrupti iste ipsum. Assumenda, rem. Aspernatur iste
        odit perferendis, earum dolorem quasi ullam possimus fugiat consequuntur
        facilis dicta officia tempore quae, beatae fugit maiores debitis? Soluta
        ex recusandae quam mollitia rerum. Eos hic unde, aperiam sunt ipsam
        alias commodi nulla repudiandae illum adipisci laborum atque cumque.
        Consequuntur mollitia ex neque placeat quos!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequatur
        consequuntur vero voluptatum autem porro delectus qui natus, officiis
        illo cum, molestias quibusdam, voluptates suscipit quod! Illum
        perspiciatis dolorem vitae nobis officia necessitatibus consequuntur
        beatae laboriosam magni corporis doloribus totam eum iste voluptate cum
        at eius, hic mollitia exercitationem iure recusandae laudantium corrupti
        itaque tempore. Veritatis minus, esse eaque nemo cupiditate dolorem
        possimus vitae aliquid laborum, facere rerum quae ut provident. Laborum
        suscipit minus nemo! Exercitationem sint molestias dolorum perferendis
        error, reprehenderit expedita? Voluptates unde quibusdam, rerum expedita
        odio quaerat doloribus nesciunt at enim porro eligendi in maiores animi
        eius accusantium quia, dicta quas exercitationem tempore magnam velit
        aperiam natus. Temporibus perferendis eius aut quia eligendi velit eum
        blanditiis tenetur voluptates nostrum, quam nemo. Recusandae molestiae,
        rerum provident sunt fugit dignissimos magnam aut eos sint vel
        consectetur. Minus esse labore cupiditate quaerat maxime repellat, quos
        cumque fugit, dolor quisquam, molestias quam earum magnam maiores
        repudiandae! Delectus, adipisci. Esse, dignissimos. Eos tempora earum
        suscipit blanditiis animi nesciunt facere magni quasi, sint omnis veniam
        reprehenderit corrupti velit vitae enim perferendis nulla consequatur
        rerum asperiores! Nostrum laboriosam iste, sapiente repudiandae odio
        voluptas ut dolorem amet omnis doloremque cumque. Qui, soluta hic. Iste
        est quasi deleniti. Qui eum odit sed quasi laudantium itaque tempore,
        saepe nam repellendus accusamus. Nesciunt aperiam, tempore nihil dolores
        est libero architecto?
      </div>
      <div
        className={`w-full min-h-[900px] transition-all duration-200  bg-gradient-to-r from-orange-500 to-red-600 flex flex-col items-center justify-start py-10 px-6 lg:py-20 lg:px-28 mt-10 text-secondary`}
      >
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-overlock text-5xl mb-4 font-semibold text-center">
              Our Services
            </h1>
            <p className="font-poppins lg:w-[500px]  text-center">
              Explore Our Comprehensive Service Offerings Solutions Tailored to
              Your Needs
            </p>
            <hr className="mt-3 lg:w-[200px] border-t-4 border-tirtry items-center mx-auto" />
          </div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-200px" }}
          className="grid grid-rows-2 grid-cols-3 gap-8 pt-20 relative"
        >
          {initialData.map((ele) => (
            <motion.div
              key={ele.id}
              variants={item}
              className="border rounded-lg bg-white h-[412px] w-[433px] inline-block p-4 hover:border-[#F97316] hover:shadow-lg group transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-6 pb-4 flex flex-col space-y-1.5">
                <div className="w-12 h-12 rounded-lg bg-[#F97316] group-hover:scale-110 transition-transform duration-300 p-3 mb-4"></div>
                <h1 className="font-semibold tracking-tight text-gray-900 text-xl mb-2">
                  {ele.main}
                </h1>
                <p className="text-gray-600 text-base leading-relaxed">
                  {ele.d1}
                </p>
              </div>
              <div className="p-6 pt-0">
                <ul className="text-gray-600">
                  <li>{ele.l1}</li>
                  <li>{ele.l2}</li>
                  <li>{ele.l3}</li>
                  <li>{ele.l4}</li>
                </ul>
              </div>
              <button className="h-[40px] w-[384px] text-[#F97316] hover:text-white hover:bg-[#F97316] rounded-md text-sm ml-3 text-center">
                Learn More
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default App;
