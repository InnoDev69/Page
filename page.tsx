import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from 'lucide-react'

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Diseñador de Interfaces CustomTkinter</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Una herramienta poderosa para crear interfaces gráficas interactivas</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Captura de pantalla de la aplicación"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Descripción de la Aplicación</CardTitle>
              <CardDescription>Simplifica la creación y personalización de ventanas y widgets visuales</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Esta aplicación es una herramienta de diseño de interfaces gráficas interactivas desarrollada con la biblioteca CustomTkinter. 
                Está diseñada para simplificar la creación y personalización de ventanas y widgets visuales mediante una interfaz intuitiva y funcional.
              </p>
              <ul className="space-y-2">
                {[
                  "Ventana Virtual para diseñar interfaces",
                  "Barra de Herramientas con funciones de importación/exportación",
                  "Configuración en Tiempo Real de widgets",
                  "Esquema Jerárquico de elementos",
                  "Modo Oscuro/Claro compatible"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button className="w-full" size="lg">
                  Descargar Aplicación
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

