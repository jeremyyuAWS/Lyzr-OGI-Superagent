import { useState, useRef } from 'react';
import { X, Download, FileText, BarChart, LineChart, PieChart, AlertCircle, Check } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
  
  const previewRef = useRef<HTMLDivElement>(null);
  
  const handleSectionToggle = (section: string) => {
    setSelectedSections({
      ...selectedSections,
      [section]: !selectedSections[section as keyof typeof selectedSections]
    });
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
      }
      
      setExportSuccess(true);
      setTimeout(() => {
        setExportSuccess(false);
      }, 3000);
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
              <div className="flex space-x-3">
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
              </div>
            </div>
            
            <button
              onClick={handleExport}
              disabled={isExporting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center transition-colors"
            >
              {isExporting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Generating...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Export Report
                </>
              )}
            </button>
            
            {exportSuccess && (
              <div className="flex items-center text-green-600 text-sm mt-2 bg-green-50 p-2 rounded">
                <Check className="h-4 w-4 mr-1" />
                Report exported successfully!
              </div>
            )}
            
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
      </div>
    </div>
  );
};

export default ExportReportModal;