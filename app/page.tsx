import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Users, Zap, Globe, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-orange-100 text-orange-700 px-4 py-2">
                  🚀 20+ Years of Excellence
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Empowering Digital
                  <span className="text-orange-600 block">Transformation</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Bridge the gap between legacy systems and next-generation solutions with our comprehensive IT services
                  and expertise.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4 rounded-full"
                >
                  <Link href="/contact" className="flex items-center">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white text-lg px-8 py-4 rounded-full"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">100+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">50+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Digital transformation illustration"
                  width={600}
                  height={500}
                  className="rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <Zap className="h-8 w-8 text-orange-600" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-amber-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 mb-4">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive IT Solutions for
              <span className="text-orange-600 block">Modern Businesses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From digital transformation to managed services, we provide end-to-end solutions that drive growth and
              innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-orange-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Digital Transformation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Modernize operations with cloud computing, AI, and automation for future-ready digital ecosystems.
                </CardDescription>
                <Button variant="ghost" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50">
                  <Link href="/services" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-amber-50 to-amber-100">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-amber-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">IT Managed Services</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  24/7 application and infrastructure management with proactive monitoring and support.
                </CardDescription>
                <Button variant="ghost" className="text-amber-600 hover:text-amber-700 hover:bg-amber-50">
                  <Link href="/services" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-yellow-50 to-yellow-100">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-yellow-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Digital Marketing</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Data-driven marketing strategies including SEO, PPC, social media, and content marketing.
                </CardDescription>
                <Button variant="ghost" className="text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50">
                  <Link href="/services" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-red-100">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-red-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Staff Augmentation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Scale your team with skilled IT professionals across various technologies and domains.
                </CardDescription>
                <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                  <Link href="/services" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8">
              <Link href="/services" className="flex items-center">
                Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700 mb-4">
                  Why Choose Us
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Your Trusted Partner for
                  <span className="text-orange-600 block">Digital Excellence</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  With over 20 years of collective experience, we combine strategic vision with hands-on execution to
                  deliver transformative results.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">20+ Years of Collective Experience</h3>
                    <p className="text-gray-600">
                      Deep industry knowledge across diverse sectors and cutting-edge technologies
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Strategic Vision + Hands-on Execution</h3>
                    <p className="text-gray-600">
                      We combine strategic insight with practical implementation for measurable results
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Value-Driven Solutions</h3>
                    <p className="text-gray-600">
                      Robust, scalable solutions strategically aligned with your long-term business goals
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Future-Focused Approach</h3>
                    <p className="text-gray-600">Technology that unlocks possibilities and drives sustainable growth</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8">
                <Link href="/about" className="flex items-center">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Team collaboration"
                  width={500}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">98%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy & Careers CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 transition-all">
              <CardHeader>
                <div className="bg-white/20 rounded-full p-3 w-fit mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Equuleus Academy</CardTitle>
                <CardDescription className="text-orange-100">Nurturing Talent. Empowering Futures.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-orange-100 leading-relaxed">
                  Join our structured training programs with industry-aligned curriculum, live projects, and direct
                  placement opportunities.
                </p>
                <Button variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 rounded-full">
                  <Link href="/academy">Explore Academy</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 transition-all">
              <CardHeader>
                <div className="bg-white/20 rounded-full p-3 w-fit mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Join Our Team</CardTitle>
                <CardDescription className="text-orange-100">Build the Future with Us</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-orange-100 leading-relaxed">
                  Work on meaningful projects, grow from day one, and make a real impact in a collaborative, trust-based
                  culture.
                </p>
                <Button variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 rounded-full">
                  <Link href="/careers">View Opportunities</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 mb-6">
              Get Started
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Let's start a conversation about your digital transformation journey. Our experts are ready to help you
              unlock new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4 rounded-full">
                <Link href="/contact" className="flex items-center">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-4 rounded-full"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
