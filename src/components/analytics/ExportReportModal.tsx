import { useState, useRef } from 'react';
import { X, Download, FileText, BarChart, LineChart, PieChart, AlertCircle, Check, FileImage, Heading, ArrowRight, ClipboardCopy } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface ExportReportModalProps {
  onClose: () => void;
}

const ExportReportModal = ({ onClose }: ExportReportModalProps) => {
  const [reportName, setReportName] = useState("SDR SuperAgent Analytics Report");
  const [selectedSections, setSelectedSections] = useState({
    overview: true,
    agentPerformance: true,
    usageTrends: true,
    roiDashboard: true,
    discoveryInsights: false
  });
  const [dateRange, setDateRange] = useState('30d');
  const [format, setFormat] = useState('pdf');
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);
  const [exportError, setExportError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<'configure' | 'preview' | 'complete'>('configure');
  const [shareableLink, setShareableLink] = useState<string>('');
  
  const previewRef = useRef<HTMLDivElement>(null);
  
  const handleSectionToggle = (section: string) => {
    setSelectedSections({
      ...selectedSections,
      [section]: !selectedSections[section as keyof typeof selectedSections]
    });
  };
  
  const generateSharableLink = () => {
    // In a real implementation, this would generate a unique link to the report
    // For now, just create a mock URL
    const baseUrl = window.location.origin;
    const mockReportId = Math.random().toString(36).substring(2, 15);
    return `${baseUrl}/shared-reports/${mockReportId}`;
  };
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareableLink)
      .then(() => {
        alert('Link copied to clipboard');
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  };
  
  const handlePreview = () => {
    setCurrentStep('preview');
  };
  
  const handleBack = () => {
    setCurrentStep('configure');
    setExportSuccess(false);
    setExportError(null);
  };
  
  const handleExport = async () => {
    setIsExporting(true);
    setExportError(null);
    
    try {
      // Simulating PDF generation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (format === 'pdf') {
        if (previewRef.current) {
          const canvas = await html2canvas(previewRef.current);
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm', 'a4');
          const imgProps = pdf.getImageProperties(imgData);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
          pdf.save(`${reportName}.pdf`);
        }
      } else if (format === 'csv') {
        // Simulating CSV export
        const blob = new Blob([
          'Agent,Usage,Success Rate,Avg Response,ROI\n' +
          'ICP Assistant,1841,96%,3.2s,$42650\n' +
          'Lead Enrichment Agent,3624,92%,1.8s,$96450\n' +
          'Email Assistant,2347,94%,2.7s,$35680\n' +
          'Sequence Builder Agent,1456,89%,3.2s,$45720\n' +
          'SDR Performance Coach,742,97%,4.8s,$24350\n' +
          'Meeting Qualifier Agent,1247,92%,5.6s,$38750\n' +
          'Integration Agent,856,94%,8.2s,$32420\n'
        ], { type: 'text/csv' });
        
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${reportName}.csv`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else if (format === 'png') {
        // Export as PNG
        if (previewRef.current) {
          const canvas = await html2canvas(previewRef.current);
          const link = document.createElement('a');
          link.download = `${reportName}.png`;
          link.href = canvas.toDataURL('image/png');
          link.click();
        }
      }
      
      // Generate shareable link
      const link = generateSharableLink();
      setShareableLink(link);
      
      setExportSuccess(true);
      setCurrentStep('complete');
    } catch (error) {
      setExportError('An error occurred during export. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Export Analytics Report</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {currentStep === 'configure' && (
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 space-y-6">
              <div>
                <label htmlFor="reportName" className="block text-sm font-medium text-gray-700 mb-1">
                  Report Name
                </label>
                <input
                  type="text"
                  id="reportName"
                  value={reportName}
                  onChange={(e) => setReportName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Include Sections
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="overview"
                      checked={selectedSections.overview}
                      onChange={() => handleSectionToggle('overview')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="overview" className="ml-2 text-sm text-gray-700">Overview & Key Metrics</label>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="agentPerformance"
                      checked={selectedSections.agentPerformance}
                      onChange={() => handleSectionToggle('agentPerformance')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="agentPerformance" className="ml-2 text-sm text-gray-700">Agent Performance</label>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="usageTrends"
                      checked={selectedSections.usageTrends}
                      onChange={() => handleSectionToggle('usageTrends')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="usageTrends" className="ml-2 text-sm text-gray-700">Usage Trends</label>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="roiDashboard"
                      checked={selectedSections.roiDashboard}
                      onChange={() => handleSectionToggle('roiDashboard')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="roiDashboard" className="ml-2 text-sm text-gray-700">ROI Dashboard</label>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="discoveryInsights"
                      checked={selectedSections.discoveryInsights}
                      onChange={() => handleSectionToggle('discoveryInsights')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="discoveryInsights" className="ml-2 text-sm text-gray-700">Discovery Insights</label>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date Range
                </label>
                <div className="flex space-x-1 text-xs">
                  <button 
                    onClick={() => setDateRange('7d')}
                    className={`px-3 py-1.5 rounded ${
                      dateRange === '7d' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    7 Days
                  </button>
                  <button 
                    onClick={() => setDateRange('30d')}
                    className={`px-3 py-1.5 rounded ${
                      dateRange === '30d' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    30 Days
                  </button>
                  <button 
                    onClick={() => setDateRange('90d')}
                    className={`px-3 py-1.5 rounded ${
                      dateRange === '90d' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    90 Days
                  </button>
                  <button 
                    onClick={() => setDateRange('ytd')}
                    className={`px-3 py-1.5 rounded ${
                      dateRange === 'ytd' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Year to Date
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Export Format
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="formatPDF"
                      checked={format === 'pdf'}
                      onChange={() => setFormat('pdf')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label htmlFor="formatPDF" className="ml-2 flex items-center text-sm text-gray-700">
                      <FileText className="h-4 w-4 mr-1" />
                      PDF
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="formatCSV"
                      checked={format === 'csv'}
                      onChange={() => setFormat('csv')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label htmlFor="formatCSV" className="ml-2 flex items-center text-sm text-gray-700">
                      <BarChart className="h-4 w-4 mr-1" />
                      CSV
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="formatPNG"
                      checked={format === 'png'}
                      onChange={() => setFormat('png')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label htmlFor="formatPNG" className="ml-2 flex items-center text-sm text-gray-700">
                      <FileImage className="h-4 w-4 mr-1" />
                      PNG
                    </label>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handlePreview}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center transition-colors"
              >
                <ArrowRight className="h-4 w-4 mr-2" />
                Preview Report
              </button>
              
              {exportError && (
                <div className="flex items-center text-red-600 text-sm mt-2 bg-red-50 p-2 rounded">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {exportError}
                </div>
              )}
            </div>
            
            <div className="md:col-span-2">
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 h-full overflow-auto">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Report Preview</h3>
                
                <div ref={previewRef} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800">{reportName}</h2>
                    <p className="text-sm text-gray-500">Generated {new Date().toLocaleDateString()} • {dateRange === '7d' ? 'Last 7 Days' : dateRange === '30d' ? 'Last 30 Days' : dateRange === '90d' ? 'Last 90 Days' : 'Year to Date'}</p>
                  </div>
                  
                  {selectedSections.overview && (
                    <div className="mb-6">
                      <h3 className="text-md font-semibold text-gray-800 mb-2 pb-1 border-b border-gray-200">Overview & Key Metrics</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-blue-50 p-3 rounded">
                          <div className="text-xs text-gray-500">Total Agent Runs</div>
                          <div className="text-lg font-medium">14,328</div>
                          <div className="text-xs text-blue-600">+24%</div>
                        </div>
                        <div className="bg-green-50 p-3 rounded">
                          <div className="text-xs text-gray-500">Estimated ROI</div>
                          <div className="text-lg font-medium">$283,450</div>
                          <div className="text-xs text-green-600">+16%</div>
                        </div>
                        <div className="bg-amber-50 p-3 rounded">
                          <div className="text-xs text-gray-500">Reply Rate</div>
                          <div className="text-lg font-medium">28.4%</div>
                          <div className="text-xs text-amber-600">+3.2%</div>
                        </div>
                        <div className="bg-pink-50 p-3 rounded">
                          <div className="text-xs text-gray-500">Meetings Booked</div>
                          <div className="text-lg font-medium">467</div>
                          <div className="text-xs text-pink-600">+5%</div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {selectedSections.agentPerformance && (
                    <div className="mb-6">
                      <h3 className="text-md font-semibold text-gray-800 mb-2 pb-1 border-b border-gray-200">Agent Performance</h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                          <thead>
                            <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              <th className="px-4 py-2">Agent</th>
                              <th className="px-4 py-2">Usage</th>
                              <th className="px-4 py-2">Success</th>
                              <th className="px-4 py-2">Response</th>
                              <th className="px-4 py-2">ROI</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-gray-100">
                              <td className="px-4 py-2">ICP Assistant</td>
                              <td className="px-4 py-2">1,841</td>
                              <td className="px-4 py-2">96%</td>
                              <td className="px-4 py-2">3.2s</td>
                              <td className="px-4 py-2">$42,650</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                              <td className="px-4 py-2">Lead Enrichment</td>
                              <td className="px-4 py-2">3,624</td>
                              <td className="px-4 py-2">92%</td>
                              <td className="px-4 py-2">1.8s</td>
                              <td className="px-4 py-2">$96,450</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                              <td className="px-4 py-2">Email Assistant</td>
                              <td className="px-4 py-2">2,347</td>
                              <td className="px-4 py-2">94%</td>
                              <td className="px-4 py-2">2.7s</td>
                              <td className="px-4 py-2">$35,680</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                  
                  {selectedSections.usageTrends && (
                    <div className="mb-6">
                      <h3 className="text-md font-semibold text-gray-800 mb-2 pb-1 border-b border-gray-200">Usage Trends</h3>
                      <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center">
                        <LineChart className="h-6 w-6 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-500">Usage Trends Chart Preview</span>
                      </div>
                    </div>
                  )}
                  
                  {selectedSections.roiDashboard && (
                    <div className="mb-6">
                      <h3 className="text-md font-semibold text-gray-800 mb-2 pb-1 border-b border-gray-200">ROI Dashboard</h3>
                      <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center">
                        <PieChart className="h-6 w-6 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-500">ROI Breakdown Chart Preview</span>
                      </div>
                    </div>
                  )}
                  
                  {selectedSections.discoveryInsights && (
                    <div className="mb-6">
                      <h3 className="text-md font-semibold text-gray-800 mb-2 pb-1 border-b border-gray-200">Discovery Insights</h3>
                      <div className="space-y-2">
                        <div className="p-2 border border-blue-100 rounded bg-blue-50">
                          <h4 className="text-sm font-medium text-blue-800">Top Underused Agents with High ROI Potential</h4>
                          <p className="text-xs text-blue-600">A/B Testing Analyst, ICP Assistant, Meeting Notes Agent</p>
                        </div>
                        <div className="p-2 border border-amber-100 rounded bg-amber-50">
                          <h4 className="text-sm font-medium text-amber-800">Agents with Degraded Performance</h4>
                          <p className="text-xs text-amber-600">LinkedIn Outreach Agent, Email Assistant</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center border-t border-gray-100 pt-4 mt-6">
                    <p className="text-xs text-gray-500">SDR SuperAgent Analytics • Powered by Lyzr AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {currentStep === 'preview' && (
          <div className="p-6">
            <div className="flex items-center mb-4">
              <button 
                onClick={handleBack}
                className="mr-4 text-sm text-gray-500 hover:text-gray-700 flex items-center"
              >
                <ArrowRight className="h-4 w-4 mr-1 rotate-180" />
                Back to Settings
              </button>
              <h3 className="text-lg font-medium text-gray-800">Report Preview</h3>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-2 mb-6 bg-white">
              <div ref={previewRef} className="bg-white p-6 max-h-[60vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <Heading className="h-6 w-6 text-gray-800 inline-block mr-2" />
                    <h2 className="text-xl font-bold text-gray-800 inline-block">{reportName}</h2>
                  </div>
                  <p className="text-sm text-gray-500">Generated {new Date().toLocaleDateString()} • {dateRange === '7d' ? 'Last 7 Days' : dateRange === '30d' ? 'Last 30 Days' : dateRange === '90d' ? 'Last 90 Days' : 'Year to Date'}</p>
                </div>
                
                {selectedSections.overview && (
                  <div className="mb-8">
                    <h3 className="text-md font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">Overview & Key Metrics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded border border-blue-100">
                        <div className="text-sm text-gray-500">Total Agent Runs</div>
                        <div className="text-xl font-semibold mt-1">14,328</div>
                        <div className="text-sm text-blue-600 flex items-center mt-1">
                          <ArrowRight className="h-3 w-3 mr-1 rotate-[-45deg]" />
                          +24% vs previous period
                        </div>
                      </div>
                      <div className="bg-green-50 p-4 rounded border border-green-100">
                        <div className="text-sm text-gray-500">Estimated ROI</div>
                        <div className="text-xl font-semibold mt-1">$283,450</div>
                        <div className="text-sm text-green-600 flex items-center mt-1">
                          <ArrowRight className="h-3 w-3 mr-1 rotate-[-45deg]" />
                          +16% vs previous period
                        </div>
                      </div>
                      <div className="bg-amber-50 p-4 rounded border border-amber-100">
                        <div className="text-sm text-gray-500">Average Reply Rate</div>
                        <div className="text-xl font-semibold mt-1">28.4%</div>
                        <div className="text-sm text-amber-600 flex items-center mt-1">
                          <ArrowRight className="h-3 w-3 mr-1 rotate-[-45deg]" />
                          +3.2 percentage points
                        </div>
                      </div>
                      <div className="bg-pink-50 p-4 rounded border border-pink-100">
                        <div className="text-sm text-gray-500">Meetings Booked</div>
                        <div className="text-xl font-semibold mt-1">467</div>
                        <div className="text-sm text-pink-600 flex items-center mt-1">
                          <ArrowRight className="h-3 w-3 mr-1 rotate-[-45deg]" />
                          +5% vs previous period
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {selectedSections.agentPerformance && (
                  <div className="mb-8">
                    <h3 className="text-md font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">Agent Performance</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usage</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Success Rate</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Response</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">ICP Assistant</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,841</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">96%</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3.2s</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$42,650</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Lead Enrichment</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3,624</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">92%</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1.8s</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$96,450</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Email Assistant</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2,347</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">94%</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.7s</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$35,680</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sequence Builder</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,456</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">89%</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3.2s</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$45,720</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                
                {selectedSections.usageTrends && (
                  <div className="mb-8">
                    <h3 className="text-md font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">Usage Trends</h3>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-center h-48 bg-gray-50 rounded-lg">
                        <div className="text-center">
                          <LineChart className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-500">Usage trend visualization shows steady growth over the selected period</p>
                          <p className="text-xs text-gray-400 mt-1">Chart will appear in the exported report</p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-4 gap-2">
                        <div className="bg-blue-50 p-2 rounded text-center">
                          <div className="text-xs text-gray-500">Email Agents</div>
                          <div className="font-medium">+24%</div>
                        </div>
                        <div className="bg-green-50 p-2 rounded text-center">
                          <div className="text-xs text-gray-500">Research</div>
                          <div className="font-medium">+16%</div>
                        </div>
                        <div className="bg-amber-50 p-2 rounded text-center">
                          <div className="text-xs text-gray-500">Analytics</div>
                          <div className="font-medium">+31%</div>
                        </div>
                        <div className="bg-pink-50 p-2 rounded text-center">
                          <div className="text-xs text-gray-500">Meetings</div>
                          <div className="font-medium">+12%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {selectedSections.roiDashboard && (
                  <div className="mb-8">
                    <h3 className="text-md font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">ROI Dashboard</h3>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-center h-48 bg-gray-50 rounded-lg">
                        <div className="text-center">
                          <PieChart className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-500">ROI distribution across agent categories and usage types</p>
                          <p className="text-xs text-gray-400 mt-1">Chart will appear in the exported report</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="font-medium text-sm text-gray-800 mb-2">ROI Distribution</div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Time Savings:</span>
                            <span className="font-medium">$120,450</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Lead Quality:</span>
                            <span className="font-medium">$80,650</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Response Rate:</span>
                            <span className="font-medium">$42,800</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Meeting Conversion:</span>
                            <span className="font-medium">$28,400</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {selectedSections.discoveryInsights && (
                  <div className="mb-8">
                    <h3 className="text-md font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">Discovery Insights</h3>
                    <div className="space-y-3">
                      <div className="p-3 border border-blue-100 rounded bg-blue-50">
                        <h4 className="text-sm font-medium text-blue-800 mb-1.5">Top Underused Agents with High ROI Potential</h4>
                        <p className="text-sm text-blue-700">These agents show strong ROI but are currently underutilized:</p>
                        <ul className="mt-2 space-y-1">
                          <li className="flex items-center text-sm">
                            <Check className="h-4 w-4 text-blue-600 mr-1.5" />
                            A/B Testing Analyst: $18,450 additional ROI possible
                          </li>
                          <li className="flex items-center text-sm">
                            <Check className="h-4 w-4 text-blue-600 mr-1.5" />
                            ICP Assistant: $12,300 additional ROI possible
                          </li>
                          <li className="flex items-center text-sm">
                            <Check className="h-4 w-4 text-blue-600 mr-1.5" />
                            Meeting Notes Agent: $8,900 additional ROI possible
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-3 border border-amber-100 rounded bg-amber-50">
                        <h4 className="text-sm font-medium text-amber-800 mb-1.5">Agents with Degraded Performance</h4>
                        <p className="text-sm text-amber-700">These agents require attention and optimization:</p>
                        <ul className="mt-2 space-y-1">
                          <li className="flex items-center text-sm">
                            <AlertCircle className="h-4 w-4 text-amber-600 mr-1.5" />
                            LinkedIn Outreach Agent: Success rate dropped from 94% to 85%
                          </li>
                          <li className="flex items-center text-sm">
                            <AlertCircle className="h-4 w-4 text-amber-600 mr-1.5" />
                            Email Assistant: Response time increased by 2.1 seconds
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="text-center border-t border-gray-100 pt-4 mt-6">
                  <div className="flex items-center justify-center text-sm text-gray-500 mb-1">
                    <LineChart className="h-4 w-4 mr-1 inline-block" />
                    <span>SDR SuperAgent Analytics</span>
                  </div>
                  <p className="text-xs text-gray-400">Generated by Lyzr AI • {new Date().toLocaleString()}</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={handleExport}
                disabled={isExporting}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md flex items-center justify-center transition-colors disabled:bg-blue-300"
              >
                {isExporting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4 mr-2" />
                    Export as {format.toUpperCase()}
                  </>
                )}
              </button>
            </div>
          </div>
        )}
        
        {currentStep === 'complete' && (
          <div className="p-6">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-50 text-green-600 mb-4">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Report Generated Successfully</h3>
                <p className="text-gray-600 mt-1">Your report has been exported. You can also share it with your team.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Report Details</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Name:</span>
                    <span className="text-gray-800 font-medium">{reportName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Format:</span>
                    <span className="text-gray-800 font-medium">{format.toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Date Range:</span>
                    <span className="text-gray-800 font-medium">
                      {dateRange === '7d' ? 'Last 7 Days' : 
                       dateRange === '30d' ? 'Last 30 Days' : 
                       dateRange === '90d' ? 'Last 90 Days' : 
                       'Year to Date'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Sections:</span>
                    <span className="text-gray-800 font-medium">{
                      Object.entries(selectedSections)
                        .filter(([_, included]) => included)
                        .length
                    } included</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Shareable Link
                </label>
                <div className="flex">
                  <input
                    type="text"
                    value={shareableLink}
                    readOnly
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50 text-sm"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="bg-gray-100 hover:bg-gray-200 border border-l-0 border-gray-300 px-3 py-2 rounded-r-md flex items-center"
                  >
                    <ClipboardCopy className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">This link will be valid for 30 days</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={handleBack}
                  className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 border border-gray-300 rounded-md flex items-center justify-center"
                >
                  Edit Report
                </button>
                <button
                  onClick={onClose}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExportReportModal;