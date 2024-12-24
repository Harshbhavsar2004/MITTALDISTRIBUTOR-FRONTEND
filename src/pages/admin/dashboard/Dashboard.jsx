import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Users, Sun, BarChart } from "lucide-react";
import { Sidebar } from "../header/sidebar";
import Header from "../header/header";
import { Button } from "@/components/ui/button";

const dailyCalls = [
  { id: 1, customer: "John Doe", time: "09:30 AM", duration: "15 mins" },
  { id: 2, customer: "Jane Smith", time: "11:45 AM", duration: "22 mins" },
  { id: 3, customer: "Bob Johnson", time: "02:15 PM", duration: "18 mins" },
  { id: 4, customer: "Alice Brown", time: "04:00 PM", duration: "10 mins" },
];

export default function Dashboard() {
  return (
    <Sidebar>
      <h2 className="text-2xl font-bold mb-6 text-sky-800">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-gray-500">
              Total Customers
            </CardTitle>
            <Users className="w-4 h-4 text-sky-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-sky-800">1,234</div>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-gray-500">
              Daily Calls
            </CardTitle>
            <Phone className="w-4 h-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-sky-800">24</div>
          </CardContent>
        </Card>
      </div>
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-xl text-sky-800 flex items-center">
            <Phone className="mr-2 text-green-500" /> Daily Calls
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 text-sky-700">Customer</th>
                  <th className="text-left p-2 text-sky-700">Time</th>
                  <th className="text-left p-2 text-sky-700">Duration</th>
                </tr>
              </thead>
              <tbody>
                {dailyCalls.map((call) => (
                  <tr key={call.id} className="border-b">
                    <td className="p-2">{call.customer}</td>
                    <td className="p-2">{call.time}</td>
                    <td className="p-2">{call.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </Sidebar>
  );
}
