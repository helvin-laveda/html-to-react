import React from 'react'

import Header from '../parts/Header'
import Button from '../elements/Button'
import Section from '../elements/Section'
import Card from '../elements/Card'
import List from '../elements/List'
import HeroImage from '../assets/images/hero-image.png'
import Clients from '../parts/Clients'
import Feature from '../parts/Feature'
import Footer from '../parts/Footer'
import Feature1 from '../assets/images/feature-tile-icon-01.svg'
import Feature2 from '../assets/images/feature-tile-icon-02.svg'
import Feature3 from '../assets/images/feature-tile-icon-03.svg'

export default function Homepage() {
    const features = [
        {
            img: Feature1,
            alt: "Feature tile icon 01",
            title: "Join the system", 
            description: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
        },
        {
            img: Feature2,
            alt: "Feature tile icon 01",
            title: "Join the system", 
            description: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
        },
        {
            img: Feature3,
            alt: "Feature tile icon 01",
            title: "Join the system", 
            description: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
        },
    ];

    const listPricing = [
        {
            price: 27,
            currency : "$",
            description: "Lorem ipsum is a common text",
            features: [
                {isChecked:true, content:"Excepteur sint occaecat velit"},
                {isChecked:true, content:"Excepteur sint occaecat velit"},
                {isChecked:true, content:"Excepteur sint occaecat velit"},
                {isChecked:false, content:"Excepteur sint occaecat velit"},
                {isChecked:false, content:"Excepteur sint occaecat velit"},
            ]
        },
        {
            price: 99,
            currency : "$",
            description: "Lorem ipsum is a common text",
            features: [
                {isChecked:true, content:"Excepteur sint occaecat velit"},
                {isChecked:true, content:"Excepteur sint occaecat velit"},
                {isChecked:true, content:"Excepteur sint occaecat velit"},
                {isChecked:true, content:"Excepteur sint occaecat velit"},
                {isChecked:false, content:"Excepteur sint occaecat velit"},
            ]
        },
        {
            price: 71,
            currency : "$",
            description: "Lorem ipsum is a common text",
            features: [
                {isChecked:true, content:"Excepteur sint occaecat velit"},
                {isChecked:true, content:"Excepteur sint occaecat velit"},
                {isChecked:true, content:"Excepteur sint occaecat velit"},
                {isChecked:true, content:"Excepteur sint occaecat velit"},
                {isChecked:true, content:"Excepteur sint occaecat velit"},
            ]
        }
    ]
    return (
        <div className='body-wrap'>
            <Header></Header>
            <main className="site-content">
                <Section className="hero section illustration-section-01" isCenteredContent>
                <div className="container-sm">
						<div className="hero-inner section-inner">
							<div className="hero-content">
								<h1
									className="mt-0 mb-16"
									data-reveal-delay="200"
								>
									Landing template for startups
								</h1>
								<div className="container-xs">
									<p
										className="mt-0 mb-32"
										data-reveal-delay="400"
									>
										Our landing page template works on all
										devices, so you only have to set it up
										once, and get beautiful results forever.
									</p>
								</div>
							</div>
							<div
								className="hero-figure illustration-element-01"
								data-reveal-value="20px"
								data-reveal-delay="800"
							>
								<img
									className="has-shadow"
									src={HeroImage}
									alt="Hero"
									width="896"
									height="504"
								/>
							</div>
						</div>
					</div>
                </Section>
                <Clients></Clients>
                <Section className="features-tiles">
                    <div className="container">
                        <div className="features-tiles-inner section-inner">
                            <div className="tiles-wrap">
                                {features.map((feature, index) => 
                                        <Feature key={index} data={feature}></Feature>
                                    )}
                            </div>
                        </div>
                    </div>
                </Section>
                <Section className="pricing">
                    <div className="container">
                        <div className="pricing-inner section-inner has-top-divider">
                            <div className="section-header center-content">
                                <div className="container-xs">
                                    <h2 className="mt-0 mb-16">
                                        Simple, transarent pricing
                                    </h2>
                                    <p className="m-0">
                                        Lorem ipsum is common placeholder text
                                        used to demonstrate the graphic elements
                                        of a document or visual presentation.
                                    </p>
                                </div>
                            </div>
                            <div className="tiles-wrap">
                                {
                                    listPricing.map((list, index) => {
                                        return (
                                            <Card hasShadow>
                                    <div className="pricing-item-content">
                                        <div className="pricing-item-header pb-24 mb-24">
                                            <div className="pricing-item-price mb-4"
                                            >
                                                <span className="pricing-item-price-currency h2"
                                                    >{list.currency}</span>
                                                <span className="pricing-item-price-amount h1 pricing-switchable"
                                                    data-pricing-monthly="34"
                                                    data-pricing-yearly="27">{list.price}</span>
                                            </div>
                                            <div className="text-xs text-color-low">
                                            {list.description}
                                            </div>
                                        </div>
                                        <div className="pricing-item-features mb-40">
                                            <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                                                What’s included
                                            </div>
                                            <List key={index} className="pricing-item-features-list mb-32" isSmall data={list.features}></List>
                                        </div>
                                        <Button isPrimary isBlock>Start free trial</Button>
                                    </div>
                                </Card>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer></Footer>
        </div>
    )
}
