import { Card, CardContent } from "@/components/ui/card";
import teamCEO from "@/assets/team-ceo.jpg";
import teamEngineer from "@/assets/team-engineer.jpg";
import teamDesigner from "@/assets/team-designer.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      image: teamCEO,
      bio: "Former VP of Engineering at TechCorp. 10+ years building scalable AI systems. MIT Computer Science grad with a passion for making AI accessible to everyone.",
      linkedin: "#"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      image: teamEngineer,
      bio: "Ex-Google senior engineer with expertise in machine learning and distributed systems. Stanford PhD in AI. Led development of ML platforms serving millions of users.",
      linkedin: "#"
    },
    {
      name: "Priya Patel",
      role: "Head of Design",
      image: teamDesigner,
      bio: "Award-winning product designer from Apple and Figma. Specialized in creating intuitive interfaces for complex AI tools. Believes great design makes technology human.",
      linkedin: "#"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate innovators with decades of experience from leading tech companies, 
            united by a vision to democratize AI technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 border-0 shadow-card bg-white"
            >
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-4 border-white shadow-card group-hover:shadow-glow transition-all duration-500"
                    />
                    <div className="absolute -inset-1 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg"></div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-muted">
                    <a 
                      href={member.linkedin}
                      className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                      Connect
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-gradient-subtle border-0 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Join Our Growing Team
              </h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for exceptional talent to help us build the future of AI. 
                Check out our open positions and be part of something revolutionary.
              </p>
              <a 
                href="#careers" 
                className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300 font-semibold"
              >
                View Open Positions 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;