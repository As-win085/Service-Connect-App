import ServiceLists  from "../SeviceLists";

const PlumbingIcon = () => <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3 .895-3 2 1.343 2 3 2m0-8V6m0 12v-2" /></svg>;
const MobileAccessIcon = () => <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
const WaterTankIcon = () => <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>;
const AudioInstallIcon = () => <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.899a9 9 0 010 12.728M5.536 13.464a1 1 0 101.414 1.414l-1.414-1.414zm0 0L4 12l1.536-1.536" /></svg>;
const LocksetChangingIcon = () => <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a3 3 0 116 0V7a3 3 0 00-6 0v3z" /></svg>;
const PumpCleaningIcon = () => <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const WiringIcon = () => <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9.75 8M14.25 17L14.25 8M16.5 4.5L12 1L7.5 4.5M6 18H18" /></svg>;


const services = [
    { name: 'Plumbing', icon: PlumbingIcon },
    { name: 'Access Mobile, Desktop & TV', icon: MobileAccessIcon },
    { name: 'Water tank fitt', icon: WaterTankIcon },
    { name: 'Audio instal', icon: AudioInstallIcon },
    { name: 'Lockset changir', icon: LocksetChangingIcon },
    { name: 'Pumb cleani', icon: PumpCleaningIcon }, // Assuming 'Pumb cleani' is a typo for 'Pump cleaning'
    { name: 'Wiring', icon: WiringIcon },
];


const ServicesListContainer = () => {
    return (
        <div className="my-2 md:my-4 w-8/10  md:w-3/4 lg:w-2/3 mx-auto p-6 bg-white rounded-xl shadow-2xl transition duration-300 ease-in-out hover:shadow-3xl transform hover:-translate-y-1">
            <h2 className="text-lg md:text-xl   font-semibold mb-4 text-gray-800">Services</h2>
            <div className="space-y-4">
                {services.map((service, index) => (
                    <ServiceLists Icon = {service.icon} name={service.name} index={index}/>
                ))}
            </div>
        </div>
    );
};

export default ServicesListContainer;
