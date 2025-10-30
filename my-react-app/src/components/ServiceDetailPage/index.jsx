import { useParams } from "react-router-dom";
import { SERVICE_CARDS } from "@/lib/constants";

const DEFAULT_IMAGE = "https://srisaiexim.in/images/sri-sai-exim-banner-i.jpg";
const DEFAULT_TITLE = "Service Coming Soon";
const DEFAULT_INTRO =
  "We’re working on adding detailed information for this service. Stay tuned for updates.";
const DEFAULT_SERVICES = [
  "Reliable logistics solutions",
  "Professional support",
  "Timely updates",
];
const DEFAULT_CONTACT = {
  phone: "+91 9972314988",
  email: "sales@srisaiexim.in",
};

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  //console.log(serviceId)
  const service = SERVICE_CARDS.find((s) => s.id === serviceId);

  // Always provide fallback values — so all serviceId routes succeed
  const title = service?.title || DEFAULT_TITLE;
  const imageUrl = service?.imageUrl || DEFAULT_IMAGE;
  const intro = service?.content?.intro || DEFAULT_INTRO;
  const services = service?.content?.services || DEFAULT_SERVICES;
  const contact = {
    phone: service?.content?.contact?.phone || DEFAULT_CONTACT.phone,
    email: service?.content?.contact?.email || DEFAULT_CONTACT.email,
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <img
        src={imageUrl}
        alt={title}
        className="mb-4 w-full rounded-lg"
      />
      <p className="mb-4"  style={{ fontWeight: 500 }}>{intro}</p>
      <ul className="list-disc ml-6 space-y-1">
        {services.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p className="mt-4">
        Contact:{" "}
        <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
          {contact.email}
        </a>{" "}
        | Phone:{" "}
        <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline">
          {contact.phone}
        </a>
      </p>
    </div>
  );
};

export default ServiceDetailPage;
