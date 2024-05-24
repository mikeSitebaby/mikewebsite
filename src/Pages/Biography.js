import React from 'react';
import Mike from '../Images/MikeBlueSuit.png';
import './Biography.css';
import AnimatedPage from "../Components/transition";



export default function Biography() {
    return (
        <AnimatedPage>
        <div>
       <h2>Biography</h2>
       <div className='bioImageContainer'>
       <img src={Mike} alt="Mike" className="bioImage"/>
       </div>
           
            <div className="bio">
<p className='bioText'> Michael is a conductor based in Lyon, France with notable experience working with Opera de Lyon, Longborough Festival Opera, Welsh National Youth Opera, Lambeth Orchestra, and Orchestra Vitae. In training, Michael has also conducted Orchestre National de Lyon, Argovia Philharmonic, Plovdiv Philharmonic and the Orchestre de Chambre de Paris.
<br></br>
<br></br>
Since 2022, Michael is one of the in-house assistant conductors at Opera de Lyon, working with conductors such as Daniele Rustioni, Wayne Marshall, Elena Schwartz and Franck Ollu. Michael also holds positions with London orchestras: Lambeth Orchestra and Orchestra of the Reform. His symphonic work has led to him working with renowned artists such as Jennifer Pike, Nadine Benjamin, Wayne Marshall, Leslie Howard, Michael Foyle, and Benjamin Baker.</p>
<p className='bioText'>Michael has an MA Performance in Orchestral Conducting from the Royal Welsh College of Music and Drama, where he trained under David Jones and assisted Carlo Rizzi on a production of Verdi's Falstaff. Michael also worked as an assistant conductor for Welsh National Youth Opera during his time in Cardiff, working with Alice Farnham on an award winning production of Sir Peter Maxwell Davis' Kommilitonen!, and Stephen McNeff on a studio recording of his own Welsh language opera Hedd Wyn. 
<br></br>
<br></br>
Michael graduated with a BMus (Hons) from Royal Holloway, University of London, where he discovered conducting with teacher Lev Parikian, and developed his interest in chamber music performance under the guidance of cellist Robert Max and conductor Neil Ferris.</p>
            </div>
        </div>
        </AnimatedPage>
    );
}