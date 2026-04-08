"use client";
import React, { useState } from 'react';
import { FileText, Sparkles, Loader2, CheckCircle } from 'lucide-react';

export default function AiConsultant() {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    

    if (!file) {
      console.log("No file selected");
      return;
    }

    console.log("File picked:", file.name);
    setFileName(file.name);
    setLoading(true);
    setAnalysis(""); // Purani analysis clear karein

    const formData = new FormData();
    formData.append('file', file);

    try {
     
      console.log("Sending to API...");
      const res = await fetch('/api/analyze', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      
      if (data.analysis) {
        console.log("Analysis received!");
        setAnalysis(data.analysis);
      } else {
        alert("Error: " + (data.error || "Something went wrong"));
      }
    } catch (err) {
      console.error("API Call Failed:", err);
      alert("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border-t-[8px] border-[#14D39A] mt-10">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-[#14D39A]/10 p-2 rounded-lg">
            <Sparkles className="text-[#14D39A] w-6 h-6" />
          </div>
          <h3 className="text-2xl md:text-3xl font-[1000] text-[#0D1B3E]">AI Smart Check</h3>
        </div>
        {fileName && (
          <span className="text-xs font-bold bg-gray-100 px-3 py-1 rounded-full text-gray-500 uppercase tracking-widest">
            {fileName}
          </span>
        )}
      </div>

      <div className={`relative border-2 border-dashed rounded-[30px] p-12 text-center transition-all ${
        fileName ? 'border-[#14D39A] bg-emerald-50/30' : 'border-gray-200 hover:border-[#14D39A] bg-gray-50'
      }`}>
        <input 
          type="file" 
          id="pdf-upload" 
          hidden 
          onChange={handleFileUpload} 
          accept="application/pdf" 
        />
        
        <label htmlFor="pdf-upload" className="cursor-pointer flex flex-col items-center group">
          {loading ? (
            <Loader2 className="w-16 h-16 text-[#14D39A] animate-spin mb-4" />
          ) : fileName ? (
            <CheckCircle className="w-16 h-16 text-[#14D39A] mb-4" />
          ) : (
            <FileText className="w-16 h-16 text-gray-300 group-hover:text-[#14D39A] transition-colors mb-4" />
          )}
          
          <h4 className="text-[#0D1B3E] text-xl font-bold mb-2">
            {loading ? "AI is Analyzing..." : fileName ? "File Uploaded Successfully" : "Drop your Bank Statement here"}
          </h4>
          <p className="text-gray-400 text-sm max-w-xs mx-auto">
            {loading ? "Please wait while Gemini processes your transactions." : "Click to browse your computer for a PDF file."}
          </p>
        </label>
      </div>

      {/* ANALYSIS RESULT BOX */}
      {analysis && (
        <div className="mt-10 p-8 bg-[#0D1B3E] text-white rounded-[30px] shadow-lg animate-in slide-in-from-bottom duration-500">
          <div className="flex items-center gap-2 mb-6 text-[#14D39A]">
            <Sparkles size={20} />
            <span className="font-bold uppercase tracking-widest text-sm">Gemini AI Report</span>
          </div>
          <div className="prose prose-invert max-w-none prose-p:leading-relaxed prose-li:my-2">
       
            <pre className="whitespace-pre-wrap font-sans text-lg opacity-90 leading-relaxed">
              {analysis}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}