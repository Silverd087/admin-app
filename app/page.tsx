// app/dashboard/page.tsx
import Sidebar from "./dashboard/components/Sidebar";
import DashboardHeader from "./dashboard/components/DashboardHeader";
import AnalyticsSection from "./dashboard/components/analytics/AnalyticsSection";
import ReservationsSection from "./dashboard/components/reservations/ReservationsSection";
import MessagesSection from "./dashboard/components/messages/MessagesSection";
import MembershipSection from "./dashboard/components/membership/MembershipSection";
import EventsSection from "./dashboard/components/events/EventsSection";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-[#4169E1]/5">
      <Sidebar />
      <div className="flex-1 overflow-y-auto p-8 bg-white">
        <DashboardHeader />
        <div className="space-y-8">
          <AnalyticsSection />
          <ReservationsSection />
          <MessagesSection />
          <MembershipSection />
          <EventsSection />
        </div>
      </div>
    </div>
  );
}
