"use client";
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight, Book, Building, Lightbulb, Ruler, Users } from "lucide-react"

export default function BIMResearchPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">Building Information Modeling (BIM)</h1>
        </div>
      </header>

      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-4 overflow-x-auto py-4">
            {["Overview", "Components", "Maturity Levels", "Advantages", "Standards"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card id="overview">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Book className="mr-2" />
                Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg?height=200&width=400" alt="BIM Overview" className="w-full h-48 object-cover mb-4 rounded" />
              <p className="text-gray-600">
                Building Information Modeling (BIM) is a digital process for creating and managing information across the lifecycle of a building. 
                It integrates 3D models with extensive data, enabling efficient collaboration among architects, engineers, contractors, and stakeholders.
              </p>
            </CardContent>
          </Card>

          <Card id="components">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="mr-2" />
                Key Components
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {["3D Models with Data", "Clash Detection", "Change Management"].map((item) => (
                  <li key={item} className="flex items-center">
                    <ArrowRight className="mr-2 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card id="maturity-levels" className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Ruler className="mr-2" />
                BIM Maturity Levels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="level0">
                <TabsList>
                  <TabsTrigger value="level0">Level 0</TabsTrigger>
                  <TabsTrigger value="level1">Level 1</TabsTrigger>
                  <TabsTrigger value="level2">Level 2</TabsTrigger>
                  <TabsTrigger value="level3">Level 3</TabsTrigger>
                </TabsList>
                <TabsContent value="level0">No collaboration; only 2D CAD drawings are used.</TabsContent>
                <TabsContent value="level1">Basic 3D modeling with limited coordination.</TabsContent>
                <TabsContent value="level2">Structured data exchange between independent models using standards like IFC.</TabsContent>
                <TabsContent value="level3">Full collaboration in a single, shared 3D model.</TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card id="advantages">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="mr-2" />
                Advantages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {["Seamless Collaboration", "Project Lifecycle Management", "Sustainability Focus"].map((item) => (
                  <li key={item} className="flex items-center">
                    <ArrowRight className="mr-2 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <img src="/placeholder.svg?height=200&width=400" alt="Collaboration in BIM" className="w-full h-48 object-cover mt-4 rounded" />
            </CardContent>
          </Card>

          <Card id="standards">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2" />
                Standards and Future Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                BIM is governed by standards like ISO 19650 and COBie. Future trends include integrating virtual and augmented reality into BIM models.
              </p>
              <img src="/placeholder.svg?height=200&width=400" alt="Sustainability in Building" className="w-full h-48 object-cover rounded" />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}