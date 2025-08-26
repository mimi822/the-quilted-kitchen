import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, Phone, MapPin, ShoppingBag, Calendar, Utensils, Cookie, Coffee, Truck, Heart } from "lucide-react";

const brand = { primary:"#6b4f4f", secondary:"#b08968", accent:"#a3b18a", cream:"#f7f3ee", charcoal:"#2f2a28" };

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-16 md:py-24">
    <div className="mx-auto max-w-6xl px-4">
      <motion.h2 initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.4}} className="text-3xl md:text-4xl font-semibold tracking-tight" style={{color:brand.charcoal}}>
        {title}
      </motion.h2>
      {subtitle && <p className="mt-2 max-w-2xl" style={{color:brand.primary}}>{subtitle}</p>}
      <div className="mt-8 grid gap-6">{children}</div>
    </div>
  </section>
);

export default function App(){
  return (
    <div className="min-h-screen w-full" style={{background:brand.cream}}>
      <div className="w-full text-center text-xs md:text-sm py-2 notice-bar">
        Weekly pre-orders open Tuesdays • Local pickup in Taylorsville • Delivery within 10 miles
      </div>
      {/* header and hero omitted for brevity... same as simple version */}
      {/* Preorder form wired */}
      <form name="preorder" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="preorder" />
        <input name="name" placeholder="Name" required/>
        <input name="email" type="email" placeholder="Email" required/>
        <textarea name="order" placeholder="Your order..."/>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}