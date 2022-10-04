import './home.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import headerImg from '../../images/woman-code.jpg';
import aYogaImg from '../../images/a-yoga.jpg';
import liveGbgImg from '../../images/livegbg.PNG';
import maticImg from '../../images/matic.png';
import React,  { useEffect, useRef } from "react";
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
    const logo = useRef(null);
    useEffect(() => {
        AOS.init(); 
        logo.current.classList.add("active")
      }, [logo]);
    return (
    <div className="home" >
            <section id="home">
            <svg width="421" ref={logo} height="146" viewBox="0 0 421 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-outside-1_321_24" maskUnits="userSpaceOnUse" x="-0.464111" y="0.280029" width="420" height="138" fill="black">
                <rect fill="white" x="-0.464111" y="0.280029" width="420" height="138" className="svg-elem-1"></rect>
                <path d="M76.2719 29.856L34.0319 133.024H21.9999L35.8239 99.232L7.53589 29.856H20.4639L42.4799 86.688L64.2399 29.856H76.2719Z" className="svg-elem-2"></path>
                <path d="M83.6289 64.672C83.6289 57.504 85.0796 51.232 87.9809 45.856C90.8822 40.3947 94.8502 36.1707 99.8849 33.184C105.005 30.1974 110.68 28.704 116.909 28.704C123.053 28.704 128.386 30.0267 132.909 32.672C137.432 35.3174 140.802 38.6454 143.021 42.656V29.856H154.797V100H143.021V86.944C140.717 91.04 137.261 94.4534 132.653 97.184C128.13 99.8294 122.84 101.152 116.781 101.152C110.552 101.152 104.92 99.616 99.8849 96.544C94.8502 93.472 90.8822 89.1627 87.9809 83.616C85.0796 78.0694 83.6289 71.7547 83.6289 64.672ZM143.021 64.8C143.021 59.5094 141.954 54.9014 139.821 50.976C137.688 47.0507 134.786 44.064 131.117 42.016C127.533 39.8827 123.565 38.816 119.213 38.816C114.861 38.816 110.893 39.84 107.309 41.888C103.725 43.936 100.866 46.9227 98.7329 50.848C96.5996 54.7734 95.5329 59.3814 95.5329 64.672C95.5329 70.048 96.5996 74.7414 98.7329 78.752C100.866 82.6774 103.725 85.7067 107.309 87.84C110.893 89.888 114.861 90.912 119.213 90.912C123.565 90.912 127.533 89.888 131.117 87.84C134.786 85.7067 137.688 82.6774 139.821 78.752C141.954 74.7414 143.021 70.0907 143.021 64.8Z" className="svg-elem-3"></path>
                <path d="M170.129 64.672C170.129 57.504 171.58 51.232 174.481 45.856C177.382 40.3947 181.35 36.1707 186.385 33.184C191.505 30.1974 197.18 28.704 203.409 28.704C209.553 28.704 214.886 30.0267 219.409 32.672C223.932 35.3174 227.302 38.6454 229.521 42.656V29.856H241.297V100H229.521V86.944C227.217 91.04 223.761 94.4534 219.153 97.184C214.63 99.8294 209.34 101.152 203.281 101.152C197.052 101.152 191.42 99.616 186.385 96.544C181.35 93.472 177.382 89.1627 174.481 83.616C171.58 78.0694 170.129 71.7547 170.129 64.672ZM229.521 64.8C229.521 59.5094 228.454 54.9014 226.321 50.976C224.188 47.0507 221.286 44.064 217.617 42.016C214.033 39.8827 210.065 38.816 205.713 38.816C201.361 38.816 197.393 39.84 193.809 41.888C190.225 43.936 187.366 46.9227 185.233 50.848C183.1 54.7734 182.033 59.3814 182.033 64.672C182.033 70.048 183.1 74.7414 185.233 78.752C187.366 82.6774 190.225 85.7067 193.809 87.84C197.393 89.888 201.361 90.912 205.713 90.912C210.065 90.912 214.033 89.888 217.617 87.84C221.286 85.7067 224.188 82.6774 226.321 78.752C228.454 74.7414 229.521 70.0907 229.521 64.8Z" className="svg-elem-4"></path>
                <path d="M256.629 64.672C256.629 57.504 258.08 51.232 260.981 45.856C263.882 40.3947 267.85 36.1707 272.885 33.184C278.005 30.1974 283.722 28.704 290.037 28.704C295.498 28.704 300.576 29.984 305.269 32.544C309.962 35.0187 313.546 38.304 316.021 42.4V5.28003H327.797V100H316.021V86.816C313.717 90.9974 310.304 94.4534 305.781 97.184C301.258 99.8294 295.968 101.152 289.909 101.152C283.68 101.152 278.005 99.616 272.885 96.544C267.85 93.472 263.882 89.1627 260.981 83.616C258.08 78.0694 256.629 71.7547 256.629 64.672ZM316.021 64.8C316.021 59.5094 314.954 54.9014 312.821 50.976C310.688 47.0507 307.786 44.064 304.117 42.016C300.533 39.8827 296.565 38.816 292.213 38.816C287.861 38.816 283.893 39.84 280.309 41.888C276.725 43.936 273.866 46.9227 271.733 50.848C269.6 54.7734 268.533 59.3814 268.533 64.672C268.533 70.048 269.6 74.7414 271.733 78.752C273.866 82.6774 276.725 85.7067 280.309 87.84C283.893 89.888 287.861 90.912 292.213 90.912C296.565 90.912 300.533 89.888 304.117 87.84C307.786 85.7067 310.688 82.6774 312.821 78.752C314.954 74.7414 316.021 70.0907 316.021 64.8Z" className="svg-elem-5"></path>
                <path d="M343.129 64.672C343.129 57.504 344.58 51.232 347.481 45.856C350.382 40.3947 354.35 36.1707 359.385 33.184C364.505 30.1974 370.18 28.704 376.409 28.704C382.553 28.704 387.886 30.0267 392.409 32.672C396.932 35.3174 400.302 38.6454 402.521 42.656V29.856H414.297V100H402.521V86.944C400.217 91.04 396.761 94.4534 392.153 97.184C387.63 99.8294 382.34 101.152 376.281 101.152C370.052 101.152 364.42 99.616 359.385 96.544C354.35 93.472 350.382 89.1627 347.481 83.616C344.58 78.0694 343.129 71.7547 343.129 64.672ZM402.521 64.8C402.521 59.5094 401.454 54.9014 399.321 50.976C397.188 47.0507 394.286 44.064 390.617 42.016C387.033 39.8827 383.065 38.816 378.713 38.816C374.361 38.816 370.393 39.84 366.809 41.888C363.225 43.936 360.366 46.9227 358.233 50.848C356.1 54.7734 355.033 59.3814 355.033 64.672C355.033 70.048 356.1 74.7414 358.233 78.752C360.366 82.6774 363.225 85.7067 366.809 87.84C370.393 89.888 374.361 90.912 378.713 90.912C383.065 90.912 387.033 89.888 390.617 87.84C394.286 85.7067 397.188 82.6774 399.321 78.752C401.454 74.7414 402.521 70.0907 402.521 64.8Z" className="svg-elem-6"></path>
                </mask>
                <path d="M76.2719 29.856L34.0319 133.024H21.9999L35.8239 99.232L7.53589 29.856H20.4639L42.4799 86.688L64.2399 29.856H76.2719Z" fill="#212121" className="svg-elem-7"></path>
                <path d="M83.6289 64.672C83.6289 57.504 85.0796 51.232 87.9809 45.856C90.8822 40.3947 94.8502 36.1707 99.8849 33.184C105.005 30.1974 110.68 28.704 116.909 28.704C123.053 28.704 128.386 30.0267 132.909 32.672C137.432 35.3174 140.802 38.6454 143.021 42.656V29.856H154.797V100H143.021V86.944C140.717 91.04 137.261 94.4534 132.653 97.184C128.13 99.8294 122.84 101.152 116.781 101.152C110.552 101.152 104.92 99.616 99.8849 96.544C94.8502 93.472 90.8822 89.1627 87.9809 83.616C85.0796 78.0694 83.6289 71.7547 83.6289 64.672ZM143.021 64.8C143.021 59.5094 141.954 54.9014 139.821 50.976C137.688 47.0507 134.786 44.064 131.117 42.016C127.533 39.8827 123.565 38.816 119.213 38.816C114.861 38.816 110.893 39.84 107.309 41.888C103.725 43.936 100.866 46.9227 98.7329 50.848C96.5996 54.7734 95.5329 59.3814 95.5329 64.672C95.5329 70.048 96.5996 74.7414 98.7329 78.752C100.866 82.6774 103.725 85.7067 107.309 87.84C110.893 89.888 114.861 90.912 119.213 90.912C123.565 90.912 127.533 89.888 131.117 87.84C134.786 85.7067 137.688 82.6774 139.821 78.752C141.954 74.7414 143.021 70.0907 143.021 64.8Z" fill="#212121" className="svg-elem-8"></path>
                <path d="M170.129 64.672C170.129 57.504 171.58 51.232 174.481 45.856C177.382 40.3947 181.35 36.1707 186.385 33.184C191.505 30.1974 197.18 28.704 203.409 28.704C209.553 28.704 214.886 30.0267 219.409 32.672C223.932 35.3174 227.302 38.6454 229.521 42.656V29.856H241.297V100H229.521V86.944C227.217 91.04 223.761 94.4534 219.153 97.184C214.63 99.8294 209.34 101.152 203.281 101.152C197.052 101.152 191.42 99.616 186.385 96.544C181.35 93.472 177.382 89.1627 174.481 83.616C171.58 78.0694 170.129 71.7547 170.129 64.672ZM229.521 64.8C229.521 59.5094 228.454 54.9014 226.321 50.976C224.188 47.0507 221.286 44.064 217.617 42.016C214.033 39.8827 210.065 38.816 205.713 38.816C201.361 38.816 197.393 39.84 193.809 41.888C190.225 43.936 187.366 46.9227 185.233 50.848C183.1 54.7734 182.033 59.3814 182.033 64.672C182.033 70.048 183.1 74.7414 185.233 78.752C187.366 82.6774 190.225 85.7067 193.809 87.84C197.393 89.888 201.361 90.912 205.713 90.912C210.065 90.912 214.033 89.888 217.617 87.84C221.286 85.7067 224.188 82.6774 226.321 78.752C228.454 74.7414 229.521 70.0907 229.521 64.8Z" fill="#212121" className="svg-elem-9"></path>
                <path d="M256.629 64.672C256.629 57.504 258.08 51.232 260.981 45.856C263.882 40.3947 267.85 36.1707 272.885 33.184C278.005 30.1974 283.722 28.704 290.037 28.704C295.498 28.704 300.576 29.984 305.269 32.544C309.962 35.0187 313.546 38.304 316.021 42.4V5.28003H327.797V100H316.021V86.816C313.717 90.9974 310.304 94.4534 305.781 97.184C301.258 99.8294 295.968 101.152 289.909 101.152C283.68 101.152 278.005 99.616 272.885 96.544C267.85 93.472 263.882 89.1627 260.981 83.616C258.08 78.0694 256.629 71.7547 256.629 64.672ZM316.021 64.8C316.021 59.5094 314.954 54.9014 312.821 50.976C310.688 47.0507 307.786 44.064 304.117 42.016C300.533 39.8827 296.565 38.816 292.213 38.816C287.861 38.816 283.893 39.84 280.309 41.888C276.725 43.936 273.866 46.9227 271.733 50.848C269.6 54.7734 268.533 59.3814 268.533 64.672C268.533 70.048 269.6 74.7414 271.733 78.752C273.866 82.6774 276.725 85.7067 280.309 87.84C283.893 89.888 287.861 90.912 292.213 90.912C296.565 90.912 300.533 89.888 304.117 87.84C307.786 85.7067 310.688 82.6774 312.821 78.752C314.954 74.7414 316.021 70.0907 316.021 64.8Z" fill="#212121" className="svg-elem-10"></path>
                <path d="M343.129 64.672C343.129 57.504 344.58 51.232 347.481 45.856C350.382 40.3947 354.35 36.1707 359.385 33.184C364.505 30.1974 370.18 28.704 376.409 28.704C382.553 28.704 387.886 30.0267 392.409 32.672C396.932 35.3174 400.302 38.6454 402.521 42.656V29.856H414.297V100H402.521V86.944C400.217 91.04 396.761 94.4534 392.153 97.184C387.63 99.8294 382.34 101.152 376.281 101.152C370.052 101.152 364.42 99.616 359.385 96.544C354.35 93.472 350.382 89.1627 347.481 83.616C344.58 78.0694 343.129 71.7547 343.129 64.672ZM402.521 64.8C402.521 59.5094 401.454 54.9014 399.321 50.976C397.188 47.0507 394.286 44.064 390.617 42.016C387.033 39.8827 383.065 38.816 378.713 38.816C374.361 38.816 370.393 39.84 366.809 41.888C363.225 43.936 360.366 46.9227 358.233 50.848C356.1 54.7734 355.033 59.3814 355.033 64.672C355.033 70.048 356.1 74.7414 358.233 78.752C360.366 82.6774 363.225 85.7067 366.809 87.84C370.393 89.888 374.361 90.912 378.713 90.912C383.065 90.912 387.033 89.888 390.617 87.84C394.286 85.7067 397.188 82.6774 399.321 78.752C401.454 74.7414 402.521 70.0907 402.521 64.8Z" fill="#212121" className="svg-elem-11"></path>
                <path d="M76.2719 29.856L34.0319 133.024H21.9999L35.8239 99.232L7.53589 29.856H20.4639L42.4799 86.688L64.2399 29.856H76.2719Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1_321_24)" className="svg-elem-12"></path>
                <path d="M83.6289 64.672C83.6289 57.504 85.0796 51.232 87.9809 45.856C90.8822 40.3947 94.8502 36.1707 99.8849 33.184C105.005 30.1974 110.68 28.704 116.909 28.704C123.053 28.704 128.386 30.0267 132.909 32.672C137.432 35.3174 140.802 38.6454 143.021 42.656V29.856H154.797V100H143.021V86.944C140.717 91.04 137.261 94.4534 132.653 97.184C128.13 99.8294 122.84 101.152 116.781 101.152C110.552 101.152 104.92 99.616 99.8849 96.544C94.8502 93.472 90.8822 89.1627 87.9809 83.616C85.0796 78.0694 83.6289 71.7547 83.6289 64.672ZM143.021 64.8C143.021 59.5094 141.954 54.9014 139.821 50.976C137.688 47.0507 134.786 44.064 131.117 42.016C127.533 39.8827 123.565 38.816 119.213 38.816C114.861 38.816 110.893 39.84 107.309 41.888C103.725 43.936 100.866 46.9227 98.7329 50.848C96.5996 54.7734 95.5329 59.3814 95.5329 64.672C95.5329 70.048 96.5996 74.7414 98.7329 78.752C100.866 82.6774 103.725 85.7067 107.309 87.84C110.893 89.888 114.861 90.912 119.213 90.912C123.565 90.912 127.533 89.888 131.117 87.84C134.786 85.7067 137.688 82.6774 139.821 78.752C141.954 74.7414 143.021 70.0907 143.021 64.8Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1_321_24)" className="svg-elem-13"></path>
                <path d="M170.129 64.672C170.129 57.504 171.58 51.232 174.481 45.856C177.382 40.3947 181.35 36.1707 186.385 33.184C191.505 30.1974 197.18 28.704 203.409 28.704C209.553 28.704 214.886 30.0267 219.409 32.672C223.932 35.3174 227.302 38.6454 229.521 42.656V29.856H241.297V100H229.521V86.944C227.217 91.04 223.761 94.4534 219.153 97.184C214.63 99.8294 209.34 101.152 203.281 101.152C197.052 101.152 191.42 99.616 186.385 96.544C181.35 93.472 177.382 89.1627 174.481 83.616C171.58 78.0694 170.129 71.7547 170.129 64.672ZM229.521 64.8C229.521 59.5094 228.454 54.9014 226.321 50.976C224.188 47.0507 221.286 44.064 217.617 42.016C214.033 39.8827 210.065 38.816 205.713 38.816C201.361 38.816 197.393 39.84 193.809 41.888C190.225 43.936 187.366 46.9227 185.233 50.848C183.1 54.7734 182.033 59.3814 182.033 64.672C182.033 70.048 183.1 74.7414 185.233 78.752C187.366 82.6774 190.225 85.7067 193.809 87.84C197.393 89.888 201.361 90.912 205.713 90.912C210.065 90.912 214.033 89.888 217.617 87.84C221.286 85.7067 224.188 82.6774 226.321 78.752C228.454 74.7414 229.521 70.0907 229.521 64.8Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1_321_24)" className="svg-elem-14"></path>
                <path d="M256.629 64.672C256.629 57.504 258.08 51.232 260.981 45.856C263.882 40.3947 267.85 36.1707 272.885 33.184C278.005 30.1974 283.722 28.704 290.037 28.704C295.498 28.704 300.576 29.984 305.269 32.544C309.962 35.0187 313.546 38.304 316.021 42.4V5.28003H327.797V100H316.021V86.816C313.717 90.9974 310.304 94.4534 305.781 97.184C301.258 99.8294 295.968 101.152 289.909 101.152C283.68 101.152 278.005 99.616 272.885 96.544C267.85 93.472 263.882 89.1627 260.981 83.616C258.08 78.0694 256.629 71.7547 256.629 64.672ZM316.021 64.8C316.021 59.5094 314.954 54.9014 312.821 50.976C310.688 47.0507 307.786 44.064 304.117 42.016C300.533 39.8827 296.565 38.816 292.213 38.816C287.861 38.816 283.893 39.84 280.309 41.888C276.725 43.936 273.866 46.9227 271.733 50.848C269.6 54.7734 268.533 59.3814 268.533 64.672C268.533 70.048 269.6 74.7414 271.733 78.752C273.866 82.6774 276.725 85.7067 280.309 87.84C283.893 89.888 287.861 90.912 292.213 90.912C296.565 90.912 300.533 89.888 304.117 87.84C307.786 85.7067 310.688 82.6774 312.821 78.752C314.954 74.7414 316.021 70.0907 316.021 64.8Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1_321_24)" className="svg-elem-15"></path>
                <path d="M343.129 64.672C343.129 57.504 344.58 51.232 347.481 45.856C350.382 40.3947 354.35 36.1707 359.385 33.184C364.505 30.1974 370.18 28.704 376.409 28.704C382.553 28.704 387.886 30.0267 392.409 32.672C396.932 35.3174 400.302 38.6454 402.521 42.656V29.856H414.297V100H402.521V86.944C400.217 91.04 396.761 94.4534 392.153 97.184C387.63 99.8294 382.34 101.152 376.281 101.152C370.052 101.152 364.42 99.616 359.385 96.544C354.35 93.472 350.382 89.1627 347.481 83.616C344.58 78.0694 343.129 71.7547 343.129 64.672ZM402.521 64.8C402.521 59.5094 401.454 54.9014 399.321 50.976C397.188 47.0507 394.286 44.064 390.617 42.016C387.033 39.8827 383.065 38.816 378.713 38.816C374.361 38.816 370.393 39.84 366.809 41.888C363.225 43.936 360.366 46.9227 358.233 50.848C356.1 54.7734 355.033 59.3814 355.033 64.672C355.033 70.048 356.1 74.7414 358.233 78.752C360.366 82.6774 363.225 85.7067 366.809 87.84C370.393 89.888 374.361 90.912 378.713 90.912C383.065 90.912 387.033 89.888 390.617 87.84C394.286 85.7067 397.188 82.6774 399.321 78.752C401.454 74.7414 402.521 70.0907 402.521 64.8Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1_321_24)" className="svg-elem-16"></path>
                <path d="M227.584 110.908C230.32 110.908 232.684 111.424 234.676 112.456C236.692 113.464 238.228 114.916 239.284 116.812C240.364 118.708 240.904 120.94 240.904 123.508C240.904 126.076 240.364 128.308 239.284 130.204C238.228 132.076 236.692 133.516 234.676 134.524C232.684 135.508 230.32 136 227.584 136H219.772V110.908H227.584ZM227.584 133.3C230.824 133.3 233.296 132.448 235 130.744C236.704 129.016 237.556 126.604 237.556 123.508C237.556 120.388 236.692 117.952 234.964 116.2C233.26 114.448 230.8 113.572 227.584 113.572H223.048V133.3H227.584Z" fill="white" className="svg-elem-17"></path>
                <path d="M246.917 113.068C246.293 113.068 245.765 112.852 245.333 112.42C244.901 111.988 244.685 111.46 244.685 110.836C244.685 110.212 244.901 109.684 245.333 109.252C245.765 108.82 246.293 108.604 246.917 108.604C247.517 108.604 248.021 108.82 248.429 109.252C248.861 109.684 249.077 110.212 249.077 110.836C249.077 111.46 248.861 111.988 248.429 112.42C248.021 112.852 247.517 113.068 246.917 113.068ZM248.501 116.272V136H245.225V116.272H248.501Z" fill="white" className="svg-elem-18"></path>
                <path d="M262.22 115.948C263.924 115.948 265.412 116.32 266.684 117.064C267.98 117.808 268.94 118.744 269.564 119.872V116.272H272.876V136.432C272.876 138.232 272.492 139.828 271.724 141.22C270.956 142.636 269.852 143.74 268.412 144.532C266.996 145.324 265.34 145.72 263.444 145.72C260.852 145.72 258.692 145.108 256.964 143.884C255.236 142.66 254.216 140.992 253.904 138.88H257.144C257.504 140.08 258.248 141.04 259.376 141.76C260.504 142.504 261.86 142.876 263.444 142.876C265.244 142.876 266.708 142.312 267.836 141.184C268.988 140.056 269.564 138.472 269.564 136.432V132.292C268.916 133.444 267.956 134.404 266.684 135.172C265.412 135.94 263.924 136.324 262.22 136.324C260.468 136.324 258.872 135.892 257.432 135.028C256.016 134.164 254.9 132.952 254.084 131.392C253.268 129.832 252.86 128.056 252.86 126.064C252.86 124.048 253.268 122.284 254.084 120.772C254.9 119.236 256.016 118.048 257.432 117.208C258.872 116.368 260.468 115.948 262.22 115.948ZM269.564 126.1C269.564 124.612 269.264 123.316 268.664 122.212C268.064 121.108 267.248 120.268 266.216 119.692C265.208 119.092 264.092 118.792 262.868 118.792C261.644 118.792 260.528 119.08 259.52 119.656C258.512 120.232 257.708 121.072 257.108 122.176C256.508 123.28 256.208 124.576 256.208 126.064C256.208 127.576 256.508 128.896 257.108 130.024C257.708 131.128 258.512 131.98 259.52 132.58C260.528 133.156 261.644 133.444 262.868 133.444C264.092 133.444 265.208 133.156 266.216 132.58C267.248 131.98 268.064 131.128 268.664 130.024C269.264 128.896 269.564 127.588 269.564 126.1Z" fill="white" className="svg-elem-19"></path>
                <path d="M280.105 113.068C279.481 113.068 278.953 112.852 278.521 112.42C278.089 111.988 277.873 111.46 277.873 110.836C277.873 110.212 278.089 109.684 278.521 109.252C278.953 108.82 279.481 108.604 280.105 108.604C280.705 108.604 281.209 108.82 281.617 109.252C282.049 109.684 282.265 110.212 282.265 110.836C282.265 111.46 282.049 111.988 281.617 112.42C281.209 112.852 280.705 113.068 280.105 113.068ZM281.689 116.272V136H278.413V116.272H281.689Z" fill="white" className="svg-elem-20"></path>
                <path d="M291.268 118.972V130.6C291.268 131.56 291.472 132.244 291.88 132.652C292.288 133.036 292.996 133.228 294.004 133.228H296.416V136H293.464C291.64 136 290.272 135.58 289.36 134.74C288.448 133.9 287.992 132.52 287.992 130.6V118.972H285.436V116.272H287.992V111.304H291.268V116.272H296.416V118.972H291.268Z" fill="white" className="svg-elem-21"></path>
                <path d="M299.161 126.064C299.161 124.048 299.569 122.284 300.385 120.772C301.201 119.236 302.317 118.048 303.733 117.208C305.173 116.368 306.769 115.948 308.521 115.948C310.249 115.948 311.749 116.32 313.021 117.064C314.293 117.808 315.241 118.744 315.865 119.872V116.272H319.177V136H315.865V132.328C315.217 133.48 314.245 134.44 312.949 135.208C311.677 135.952 310.189 136.324 308.485 136.324C306.733 136.324 305.149 135.892 303.733 135.028C302.317 134.164 301.201 132.952 300.385 131.392C299.569 129.832 299.161 128.056 299.161 126.064ZM315.865 126.1C315.865 124.612 315.565 123.316 314.965 122.212C314.365 121.108 313.549 120.268 312.517 119.692C311.509 119.092 310.393 118.792 309.169 118.792C307.945 118.792 306.829 119.08 305.821 119.656C304.813 120.232 304.009 121.072 303.409 122.176C302.809 123.28 302.509 124.576 302.509 126.064C302.509 127.576 302.809 128.896 303.409 130.024C304.009 131.128 304.813 131.98 305.821 132.58C306.829 133.156 307.945 133.444 309.169 133.444C310.393 133.444 311.509 133.156 312.517 132.58C313.549 131.98 314.365 131.128 314.965 130.024C315.565 128.896 315.865 127.588 315.865 126.1Z" fill="white" className="svg-elem-22"></path>
                <path d="M327.989 109.36V136H324.713V109.36H327.989Z" fill="white" className="svg-elem-23"></path>
                <path d="M346.446 119.944C347.118 118.768 348.102 117.808 349.398 117.064C350.694 116.32 352.17 115.948 353.826 115.948C355.602 115.948 357.198 116.368 358.614 117.208C360.03 118.048 361.146 119.236 361.962 120.772C362.778 122.284 363.186 124.048 363.186 126.064C363.186 128.056 362.778 129.832 361.962 131.392C361.146 132.952 360.018 134.164 358.578 135.028C357.162 135.892 355.578 136.324 353.826 136.324C352.122 136.324 350.622 135.952 349.326 135.208C348.054 134.464 347.094 133.516 346.446 132.364V136H343.17V109.36H346.446V119.944ZM359.838 126.064C359.838 124.576 359.538 123.28 358.938 122.176C358.338 121.072 357.522 120.232 356.49 119.656C355.482 119.08 354.366 118.792 353.142 118.792C351.942 118.792 350.826 119.092 349.794 119.692C348.786 120.268 347.97 121.12 347.346 122.248C346.746 123.352 346.446 124.636 346.446 126.1C346.446 127.588 346.746 128.896 347.346 130.024C347.97 131.128 348.786 131.98 349.794 132.58C350.826 133.156 351.942 133.444 353.142 133.444C354.366 133.444 355.482 133.156 356.49 132.58C357.522 131.98 358.338 131.128 358.938 130.024C359.538 128.896 359.838 127.576 359.838 126.064Z" fill="white" className="svg-elem-24"></path>
                <path d="M384.491 116.272L372.611 145.288H369.227L373.115 135.784L365.159 116.272H368.795L374.987 132.256L381.107 116.272H384.491Z" fill="white" className="svg-elem-25"></path>
                <path d="M391.06 119.476C391.636 118.348 392.452 117.472 393.508 116.848C394.588 116.224 395.896 115.912 397.432 115.912V119.296H396.568C392.896 119.296 391.06 121.288 391.06 125.272V136H387.784V116.272H391.06V119.476Z" fill="white" className="svg-elem-26"></path>
                <path d="M399.989 126.064C399.989 124.048 400.397 122.284 401.213 120.772C402.029 119.236 403.145 118.048 404.561 117.208C406.001 116.368 407.597 115.948 409.349 115.948C411.077 115.948 412.577 116.32 413.849 117.064C415.121 117.808 416.069 118.744 416.693 119.872V116.272H420.005V136H416.693V132.328C416.045 133.48 415.073 134.44 413.777 135.208C412.505 135.952 411.017 136.324 409.313 136.324C407.561 136.324 405.977 135.892 404.561 135.028C403.145 134.164 402.029 132.952 401.213 131.392C400.397 129.832 399.989 128.056 399.989 126.064ZM416.693 126.1C416.693 124.612 416.393 123.316 415.793 122.212C415.193 121.108 414.377 120.268 413.345 119.692C412.337 119.092 411.221 118.792 409.997 118.792C408.773 118.792 407.657 119.08 406.649 119.656C405.641 120.232 404.837 121.072 404.237 122.176C403.637 123.28 403.337 124.576 403.337 126.064C403.337 127.576 403.637 128.896 404.237 130.024C404.837 131.128 405.641 131.98 406.649 132.58C407.657 133.156 408.773 133.444 409.997 133.444C411.221 133.444 412.337 133.156 413.345 132.58C414.377 131.98 415.193 131.128 415.793 130.024C416.393 128.896 416.693 127.588 416.693 126.1ZM414.497 110.368C414.497 111.52 414.125 112.444 413.381 113.14C412.661 113.812 411.749 114.148 410.645 114.148C409.565 114.148 408.653 113.8 407.909 113.104C407.165 112.408 406.793 111.496 406.793 110.368C406.793 109.24 407.165 108.328 407.909 107.632C408.653 106.936 409.565 106.588 410.645 106.588C411.749 106.588 412.661 106.936 413.381 107.632C414.125 108.304 414.497 109.216 414.497 110.368ZM412.589 110.332C412.589 109.732 412.397 109.252 412.013 108.892C411.653 108.508 411.197 108.316 410.645 108.316C410.093 108.316 409.625 108.508 409.241 108.892C408.881 109.252 408.701 109.732 408.701 110.332C408.701 110.932 408.881 111.424 409.241 111.808C409.625 112.192 410.093 112.384 410.645 112.384C411.197 112.384 411.653 112.192 412.013 111.808C412.397 111.424 412.589 110.932 412.589 110.332Z" fill="white" className="svg-elem-27"></path>
            </svg>
                {/* <img src={headerImg} alt="woman coding" />
                <div className="text">
                    <h1>yaada</h1>
                    <h5>digital byrå</h5>
                </div>   */}
            </section>
            <section id="about">
                <div className="container">
                    <div className="business-areas">
                        <div className="business-area" data-aos="fade-right">
                            <DesignServicesOutlinedIcon color="primary" className="business-icon" />
                            <h5>Design</h5>
                            <p>Vi designar er hemsida eller digitala produkt från grunden, väldigt gärna i nära samarbete med er.   </p>
                        </div>
                        <div className="business-area" data-aos="fade-up">
                            <MobileFriendlyOutlinedIcon  color="primary" className="business-icon" />
                            <h5>Webbutveckling</h5>
                            <p>Vi bygger er hemsida och ser till att den går som en klocka. </p>
                        </div>
                        <div className="business-area" data-aos="fade-left">
                            <LocationSearchingOutlinedIcon color="primary" className="business-icon"  />
                            <h5>SEO</h5>
                            <p>Vi optimerar er hemsida, så att ni syns på bästa på möjliga vis hos exempelvis Google. </p>
                        </div>
                    </div>
                    {/* <Button className="services-btn" variant="contained" color="primary">Våra tjänster</Button> */}
                </div>
            </section>
            <section className="brag">
                <div className="container brag-wrapper">
                    <p className="slogan">- We are yet another awesome digital agency -</p>
                    <h5 data-aos="fade-up">Vi hjälper företag att nå sin fulla potential genom att utveckla digitala tjänster och hemsidor som är snygga och ligger i teknisk framkant.  </h5>
                    <h5 class="brag-google" data-aos="fade-up">Dessutom ser vi till att ni blir maximalt synliga på Google.</h5>
                    {/* <h5>Helping companies fulfil their visions through our digital knowledge. As I walk in the valley in the shadow of death I will fear no evil because the lord is with me. Got my mind on my money and money on my mind</h5> */}
                </div>
            </section>
            <section id="cases">
                <div className="container">
                    <h3>Case</h3>
                    <div className="case-wrapper">     
                        <div className="case">
                            <a href="https://a-yoga.se" target="_blank">
                                <div className='img-wrapper' data-aos="zoom-in">
                                    <img src={aYogaImg} alt="" />
                                </div>
                                <h5>Ahderinne yoga</h5>
                            </a>
                            <div className="tech">
                                <p>JavaScript</p>
                                <p>SEO</p>
                                <p>CMS</p>
                            </div>
                        </div>
                        <div className="case">
                            <a href="https://www.livegbg.se" target="_blank">
                                <div className="img-wrapper" data-aos="zoom-in">
                                    <img src={liveGbgImg} alt="" />
                                </div>
                                <h5>Live GBG</h5>
                            </a>
                            <div className="tech">
                                <p>Vue.js</p>
                                <p>Node.js</p>
                                <p>Puppeteer</p>
                                <p>MongoDB</p>
                            </div>
                        </div>
                        <div className="case">
                            <a href="https://www.matictribe.com" target="_blank">
                                <div className="img-wrapper" data-aos="zoom-in">
                                    <img src={maticImg} alt="" />
                                </div>
                            <h5>Matic tribe</h5>
                            </a>
                            <div className="tech">
                                <p>Vue.js</p>
                                <p>HTML</p>
                                <p>Animations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Button variant="contained" children="Hello World"></Button> */}
    </div>
    )
  }
  