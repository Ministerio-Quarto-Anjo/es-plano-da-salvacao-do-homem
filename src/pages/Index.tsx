import BibleSchoolHeader from "@/components/BibleSchoolHeader";
import LessonsOverview from "@/components/LessonsOverview";
import KeyTopics from "@/components/KeyTopics";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <BibleSchoolHeader />
      <LessonsOverview />
      <KeyTopics />
      <CallToAction />
    </div>
  );
};

export default Index;
