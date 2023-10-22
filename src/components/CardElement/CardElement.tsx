import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card"

type Props = {
  title: string, 
  description: string, 
  children: React.ReactNode, 
  footer: string
}

export default function CardElement({title, description, children, footer}: Props) {
  return (
    <Card className='backdrop-blur bg-white/50'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <p>{footer}</p>
      </CardFooter>
    </Card>
  )
}
