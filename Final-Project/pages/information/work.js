import React from 'react'
import BreadCrumbs from "@/components/BreadCrumbs";

export default function work() {
    const breadCrumbs =[
        {name: "Home", url: "/"},
        {name: "Information", url: "/information"},
        {name: "Work", url: "/information/work"},
      ]
  return (
    <div>
        <BreadCrumbs breadCrumbs={breadCrumbs}/>
    </div>
  )
}
