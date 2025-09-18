import { useState } from 'react';
import { MapPin, Phone, Clock, Bed, Star, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Hospital = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const hospitalStats = [
    { icon: Bed, label: 'Total Beds', value: '500+' },
    { icon: Users, label: 'Doctors', value: '150+' },
    { icon: Award, label: 'Awards', value: '25+' },
    { icon: Star, label: 'Rating', value: '4.8' },
  ];

  const services = [
    'Emergency Care 24/7',
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Oncology',
    'Radiology',
    'Surgery',
    'Maternity',
    'ICU',
  ];

  const facilities = [
    'Modern Operating Theaters',
    'Advanced Imaging Center',
    'Pharmacy',
    'Laboratory Services',
    'Cafeteria',
    'Parking',
    'Patient Rooms',
    'Waiting Areas',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary/90 to-primary-foreground/90 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Excellence in Healthcare
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Providing comprehensive medical services with state-of-the-art facilities and compassionate care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/hospitals">Find Hospitals</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                <Link to="/doctors">Find Doctors</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {hospitalStats.map((stat, index) => (
            <Card key={index} className="text-center bg-card/95 backdrop-blur">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Content Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['overview', 'services', 'facilities'].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? 'default' : 'outline'}
              onClick={() => setActiveTab(tab)}
              className="capitalize"
            >
              {tab}
            </Button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>About Our Healthcare Network</CardTitle>
                <CardDescription>
                  Leading healthcare provider with multiple locations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our hospital network is committed to providing exceptional healthcare services 
                  with a focus on patient-centered care, advanced medical technology, and 
                  highly qualified medical professionals.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm">24/7 Emergency Services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">Multiple Locations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">24/7 Patient Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why Choose Us</CardTitle>
                <CardDescription>
                  Excellence in every aspect of healthcare
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Advanced Technology</h4>
                    <p className="text-sm text-muted-foreground">
                      State-of-the-art medical equipment and diagnostic tools
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Expert Team</h4>
                    <p className="text-sm text-muted-foreground">
                      Highly qualified doctors and medical professionals
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Patient Care</h4>
                    <p className="text-sm text-muted-foreground">
                      Compassionate care focused on patient comfort and recovery
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'services' && (
          <Card>
            <CardHeader>
              <CardTitle>Medical Services</CardTitle>
              <CardDescription>
                Comprehensive healthcare services for all your medical needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {services.map((service, index) => (
                  <Badge key={index} variant="secondary" className="p-3 text-center justify-center">
                    {service}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'facilities' && (
          <Card>
            <CardHeader>
              <CardTitle>Hospital Facilities</CardTitle>
              <CardDescription>
                Modern facilities designed for patient comfort and care
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find the right hospital and doctor for your healthcare needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/hospitals">Browse Hospitals</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/doctors">Find Doctors</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospital;