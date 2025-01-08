import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Rocket, Lightbulb, TrendingUp, Star } from 'lucide-react'
import { ThemeToggle } from './components/theme-toggle'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <div className="w-full flex justify-center">
        <header className="sticky top-0 z-50 w-full max-w-[1400px] border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-14 items-center px-8">
            <div className="flex md:flex">
              <Link className="flex items-center space-x-2" href="/">
                <Rocket className="h-6 w-6" />
                <span className="hidden font-bold sm:inline-block">
                  Propulseurs
                </span>
              </Link>
              <nav className="flex items-center space-x-6 text-sm font-medium ml-8">
                <Link href="#services">Services</Link>
                <Link href="#about">About</Link>
                <Link href="#testimonials">Testimonials</Link>
              </nav>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <ThemeToggle />
              <Button>Contact Us</Button>
            </div>
          </div>
        </header>
      </div>

      <main className="flex-1 w-full flex flex-col items-center">
        <div className="w-full max-w-[1400px] px-8">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Propulsez vos projets
                  </h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Propulseurs: sous-titre
                  </p>
                </div>
                <div className="space-x-4">
                  <Button>Get Started</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <Lightbulb className="w-8 h-8 mb-2" />
                    <CardTitle>Strategic Foresight</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Anticipate market shifts and technological disruptions to stay ahead of the curve.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <TrendingUp className="w-8 h-8 mb-2" />
                    <CardTitle>Trend Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Identify and analyze emerging trends that will shape your industry's future.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Rocket className="w-8 h-8 mb-2" />
                    <CardTitle>Innovation Consulting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Develop cutting-edge strategies to drive innovation and growth in your organization.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section id="about" className="w-full py-12 md:py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                <Image
                  alt="Team of consultants"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Propulseurs</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    At Propulseurs, we're passionate about helping businesses navigate the uncertainties of the future. Our team of expert futurists and strategists work tirelessly to provide actionable insights and innovative solutions.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button className="inline-flex items-center">
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">What Our Clients Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Transformative Insights</CardTitle>
                    <CardDescription>CEO, Tech Innovators Inc.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>"Propulseurs provided us with transformative insights that reshaped our entire business strategy. Their foresight was invaluable."</p>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Game-Changing Strategies</CardTitle>
                    <CardDescription>COO, Future Dynamics Ltd.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>"The strategies developed with Propulseurs were game-changing. They helped us stay two steps ahead of our competition."</p>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </main>

      <div className="w-full flex justify-center">
        <footer className="w-full max-w-[1400px] border-t">
          <div className="flex flex-col gap-2 sm:flex-row py-6 px-8 shrink-0 items-center">
            <p className="text-xs text-muted-foreground">© 2024 Propulseurs. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Privacy
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  )
}

