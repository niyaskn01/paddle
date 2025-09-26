import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    duration: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  const submitGoogleSheet = async (data: typeof formData) => {
  const dataWithTimestamp = {
    ...data,
    submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }), // adds timestamp
  };
  console.log(dataWithTimestamp)
  return axios.post("https://api.sheetbest.com/sheets/3c96fbae-bcb4-4ea9-8e9f-6a35b33d5b26", dataWithTimestamp, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    // Submit form data to Google Sheets
     await submitGoogleSheet(formData);

    // Show success toast
    toast({
      title: "Booking Request Received!",
      description: "We'll contact you within 24 hours to confirm your adventure.",
    });

    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      duration: "",
      message: ""
    });


  } catch (error: any) {
    // Show error toast
    toast({
      title: "Error submitting form",
      description: error.message || "Something went wrong.",
    });
  }
};


  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-secondary" />,
      title: "Location",
      details: "mampuzha, Arayankavu, Kerala, Ernakulam 682317"
    },
    {
      icon: <Phone className="h-6 w-6 text-secondary" />,
      title: "Phone",
      details: "+91 80893 52660"    },
    {
      icon: <Mail className="h-6 w-6 text-secondary" />,
      title: "Email",
      details: "kayakversekochi@gmail.com"
    },
    {
      icon: <Clock className="h-6 w-6 text-secondary" />,
      title: "Hours",
      details: "Daily: 6:00 AM - 7:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Start Your Adventure Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to explore the water? Get in touch to book your kayak rental or ask any questions about our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-2 
              border-primary 
              rounded-lg         
              p-6               
              bg-white   shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Book Your Kayak Adventure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="8034235255"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Date
                    </label>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Rental Duration
                  </label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  >
                    <option value="">Select Slot</option>
                    <option value="morning">Morning </option>
                    <option value="evening">Evening </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Special Requests or Questions
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full"
                    rows={4}
                    placeholder="Tell us about your group size, experience level, or any special requirements..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-3"
                >
                  Send Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-none shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      {info.icon}
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {info.details}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>


            {/* Google Maps Embed */}
            <Card className="border-none shadow-card overflow-hidden">
              <div className="h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368459418!3d40.74844797932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1649962329844!5m2!1sen!2sushttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.2239461880886!2d76.4073453!3d9.8315495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08773fd6af498d%3A0xbe89a88ac9d42515!2sPaddleX%20Adventures%20Kayaking!5e0!3m2!1sen!2sin!4v1757044199837!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AquaVenture Kayaks Location"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;