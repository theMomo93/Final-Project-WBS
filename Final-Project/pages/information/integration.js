import React from 'react'
import BreadCrumbs from "@/components/BreadCrumbs";

export default function integration() {
    const breadCrumbs =[
        {name: "Home", url: "/"},
        {name: "Information", url: "/information"},
        {name: "Integration", url: "/information/integration"},
      ]
  return (
    <div>
        <BreadCrumbs breadCrumbs={breadCrumbs}/>


        
    </div>
  )
}
